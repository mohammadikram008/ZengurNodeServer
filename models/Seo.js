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
    CurrentWebsiteTraffic: {
        type: String,
        required: false,
    },
    CurrentKeywordRankings: {
        type: String,
        required: false,
    },
    PreviousSEOEfforts: {
        type: String,
        required: false,
    },
    TargetAudience: {
        type: String,
        required: false,
    },
    PrimaryKeywords: {
        type: String,
        required: false,
    },
    SecondaryKeywords: {
        type: String,
        required: false,
    },
    LongTailKeywords: {
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
    KeyCompetitorsStrengthsandWeaknesses: {
        type: String,
        required: false,
    },
    CompetitorWebsites: {
        type: String,
        required: false,
    },


});
module.exports = mongoose.model("seo", taskSchema);
