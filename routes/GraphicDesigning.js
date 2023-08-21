const express = require('express');
const multer = require('multer');
const router = express.Router();
const mongoose = require('mongoose');
const Task = require('../models/GraphicDesiging'); // Define your data model

// Set up multer storage for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // const task = await new Task(req.body).save();
        // res.send(task);

        // const formData = new Task({
        //     ...Task,
        //     file: {
        //         data: req.file.buffer,
        //         contentType: req.file.mimetype,
        //     },
        // });
        const formData = new Task({
            log: req.body.log,
            other: req.body.other,
            font: req.body.font,
            size: req.body.size,
            style: req.body.style,
            targetaudience: req.body.targetaudience,
            Purpose: req.body.Purpose,
            KeyInformationtoInclude: req.body.KeyInformationtoInclude,
            CalltoAction: req.body.CalltoAction,
            DesignStylePreferences: req.body.DesignStylePreferences,
            AnyOtherSpecificRequirements: req.body.AnyOtherSpecificRequirements,
            DeliveryMethod: req.body.DeliveryMethod,
            DropBoxinserthere: req.body.DropBoxinserthere,
            file: {
                data: req.file.buffer,
                contentType: req.file.mimetype,
            },
        });

        await formData.save();

        res.status(201).json({ message: 'Data and file uploaded successfully' });
    } catch (error) {
        console.error('Error uploading data and file:', error);
        res.status(500).json({ error: 'Error uploading data and file' });
    }
});

module.exports = router;

// const Task = require("../models/GraphicDesiging");
// const express = require("express");
// const router = express.Router();

// router.post("/", async (req, res) => {
//     try {
//         const task = await new Task(req.body).save();
//         res.send(task);
//     } catch (error) {
//         res.send(error);
//     }
// });
// // router.get("/", async (req, res) => {
// //     try {
// //         const tasks = await Task.find();
// //         res.send(tasks);
// //     } catch (error) {
// //         res.send(error);
// //     }
// // });
// // router.put("/:id", async (req, res) => {
// //     try {
// //         const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
// //         res.send(task);
// //     } catch (error) {
// //         res.send(error);
// //     }
// // });
// // router.delete("/:id", async (req, res) => {
// //     try {
// //         const task = await Task.findByIdAndDelete(req.params.id);
// //         res.send(task);
// //     } catch (error) {
// //         res.send(error);
// //     }
// // });
// // router.get("/search/:key", async (req, res) => {
// //     try {
// //         let result = await Task.find({
// //             $or: [
// //                 {
// //                     name: { $regex: req.params.key },
// //                 },
// //                 {
// //                     assignee: { $regex: req.params.key },
// //                 },
// //             ],
// //         });
// //         res.send(result);
// //     } catch (error) {
// //         res.send(error);
// //     }
// // });
// module.exports = router;
