const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({


  brandname: {
    type: String,
    required: false,
  },
  websitetype: {
    type: String,
    required: false,
  },
  refrance: {
    type: String,
    required: false,
  },
  Branddescription: {
    type: String,
    required: false,
  },
  numberofpages: {
    type: String,
    required: false,
  },
  servicefeature1: {
    type: String,
    required: false,
  },
  servicefeature2: {
    type: String,
    required: false,
  },
  servicefeature3: {
    type: String,
    required: false,
  },
  Dycompanybriefly: {
    type: String,
    required: false,
  },
  WebsitesUnderDomain: {
    type: String,
    required: false,
  },
  domianname: {
    type: String,
    required: false,
  },
  additionalreq: {
    type: String,
    required: false,
  },
  hasDomain: {
    type: String,
    required: false,
  },
  needHosting: {
    type: String,
    required: false,
  },
  needLogo: {
    type: String,
    required: false,
  },
  needContent: {
    type: String,
    required: false,
  },
  needImages: {
    type: String,
    required: false,
  },


});
module.exports = mongoose.model("webform", taskSchema);
