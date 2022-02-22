const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const weaponSchema = mongoose.Schema({
  id: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
  },
  stars: {
    type: Number,
  },
  type: {
    type: String,
    trim: true,
  },
  effect: {
    type: Array,
    trim: true,
  },
  atkInit: {
    type: Number,
    trim: true,
  },
  statInit: {
    type: Number,
    trim: true,
  },
  stat: {
    type: Number,
    trim: true,
  },
  atkCurve: {
    type: String,
    trim: true,
  },
  statCurve: {
    type: String,
    trim: true,
  },
  atkAdd: {
    type: Array,
    trim: true,
  },
  mats: {
    type: Array,
    trim: true,
  },
});

// add plugin that converts mongoose to json
weaponSchema.plugin(toJSON);
weaponSchema.plugin(paginate);

/**
 * @typedef Weapons
 */
const Weapons = mongoose.model("Weapons", weaponSchema);

module.exports = Weapons;
