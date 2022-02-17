const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const characterSchema = mongoose.Schema({
  id: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  stars: {
    type: Number,
  },
  weapon: {
    type: String,
    trim: true,
  },
  element: {
    type: String,
    trim: true,
  },
  abilities: {
    type: Array,
    trim: true,
  },
  talent: {
    type: Array,
    trim: true,
  },
  mats: {
    type: Array,
    trim: true,
  },
});

// add plugin that converts mongoose to json
characterSchema.plugin(toJSON);
characterSchema.plugin(paginate);

/**
 * @typedef Character
 */
const Character = mongoose.model("Characters", characterSchema);

module.exports = Character;
