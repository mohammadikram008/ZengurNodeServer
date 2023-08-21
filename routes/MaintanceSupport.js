const Task = require("../models/MaintanceSupport");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});
router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});
router.get("/search/:key", async (req, res) => {
    try {
        let result = await Task.find({
            $or: [
                {
                    name: { $regex: req.params.key },
                },
                {
                    assignee: { $regex: req.params.key },
                },
            ],
        });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});
module.exports = router;
