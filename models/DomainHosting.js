const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({

    websiteName: {
        type: String,
        required: false,
    },
    websitedes: {
        type: String,
        required: false,
    },
    DomainNamePreference: {
        type: String,
        required: false,
    },
    DomainExtension: {
        type: String,
        required: false,
    },
    AdditionalDomainNames: {
        type: String,
        required: false,
    },
    DomainPrivacyProtection: {
        type: String,
        required: false,
    },
    HostingType: {
        type: String,
        required: false,
    },
    StorageSpaceNeeded: {
        type: String,
        required: false,
    },
    BandwidthTransferLimit: {
        type: String,
        required: false,
    },
    OperatingSystemPreference: {
        type: String,
        required: false,
    },
    ControlPanelPreference: {
        type: String,
        required: false,
    },
    WebsitePlatformCMS: {
        type: String,
        required: false,
    },
    DatabaseRequirements: {
        type: String,
        required: false,
    },
    EmailHostingRequirements: {
        type: String,
        required: false,
    },
    SSLCertificateNeeded: {
        type: String,
        required: false,
    },
    ContentMigrationTransfer: {
        type: String,
        required: false,
    },
    BackupandRestoreServices: {
        type: String,
        required: false,
    },


});
module.exports = mongoose.model("domianhosting", taskSchema);
