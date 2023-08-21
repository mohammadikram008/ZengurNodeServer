const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({

    log: {
        type: String,
        required: false,
    },
    other: {
        type: String,
        required: false,
    },
    font: {
        type: String,
        required: false,
    },
    size: {
        type: String,
        required: false,
    },
    style: {
        type: String,
        required: false,
    },
    targetaudience: {
        type: String,
        required: false,
    },
    Purpose: {
        type: String,
        required: false,
    },
    KeyInformationtoInclude: {
        type: String,
        required: false,
    },
    CalltoAction: {
        type: String,
        required: false,
    },
    DesignStylePreferences: {
        type: String,
        required: false,
    },
    AnyOtherSpecificRequirements: {
        type: String,
        required: false,
    },
    DeliveryMethod: {
        type: String,
        required: false,
    },
    DropBoxinserthere: {
        type: String,
        required: false,
    },
    DesignProduct: {
        type: String,
        required: false,
    },
    file: {
        data: Buffer, // Store the file data
        contentType: String, // Store the content type of the file
    },

});
module.exports = mongoose.model("graphicdesigning", taskSchema);
