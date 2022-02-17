const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const translationSchema = mongoose.Schema({
  id: {
    type: String,
    trim: true,
  },
  translation: {
    type: String,
    trim: true,
  },
});

// add plugin that converts mongoose to json
translationSchema.plugin(toJSON);
translationSchema.plugin(paginate);

/**
 * @typedef Translation
 */
const Translation = mongoose.model("translations", translationSchema);

module.exports = Translation;
