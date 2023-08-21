const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({

    websiteName: {
        type: String,
        required: false,
    },
    websiteURL: {
        type: String,
        required: false,
    },
    websitedes: {
        type: String,
        required: false,
    },
    MaintenanceSchedule: {
        type: String,
        required: false,
    },
    PreferredMaintenance: {
        type: String,
        required: false,
    },
    EmergencySupport: {
        type: String,
        required: false,
    },
    PreferredMethodofContact: {
        type: String,
        required: false,
    },
    BestTimetoReachYou: {
        type: String,
        required: false,
    }


});
module.exports = mongoose.model("maintancesupport", taskSchema);
