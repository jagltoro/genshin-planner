const { Translation } = require("../models");

/**
 * Get Translation by id
 * @param {String} id
 * @returns {Promise<Translation>}
 */
const getTranslationByName = async (id) => {
  return Translation.findOne({ ...{ id } });
};

module.exports = {
  getTranslationByName,
};
