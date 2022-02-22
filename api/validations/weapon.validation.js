const Joi = require("joi");

const getWeapons = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getWeapon = {
  params: Joi.object().keys({
    weaponName: Joi.string(),
  }),
};

module.exports = {
  getWeapons,
  getWeapon,
};
