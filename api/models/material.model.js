const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const materialSchema = mongoose.Schema({
  id: {
    type: Number,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  stars: {
    type: Number,
  },
  img: {
    type: String,
    trim: true,
  },
  type: {
    type: Number,
  },
  family: {
    type: Number,
  },
  sort: {
    type: Number,
  },
  filter: {
    type: Number,
  },
  category: {
    type: String,
    trim: true,
  },
  subcategory: {
    type: String,
    trim: true,
  },
  good: {
    type: String,
    trim: true,
  },
  source: {
    type: Array,
    trim: true,
  },
});

// add plugin that converts mongoose to json
materialSchema.plugin(toJSON);
materialSchema.plugin(paginate);

/**
 * @typedef Material
 */
const Material = mongoose.model("Material", materialSchema);

module.exports = Material;
