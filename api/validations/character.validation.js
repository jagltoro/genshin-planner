const Joi = require("joi");

const getCharacters = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCharacter = {
  params: Joi.object().keys({
    characterName: Joi.string(),
  }),
};

module.exports = {
  getCharacters,
  getCharacter,
};
