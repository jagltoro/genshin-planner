const { Character } = require("../models");

/**
 * Query for Characters
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCharacters = async (filter, options) => {
  const characters = await Character.paginate(filter, options);
  return characters;
};

/**
 * Get user by name
 * @param {ObjectId} name
 * @returns {Promise<Character>}
 */
const getCharacterByName = async (name) => {
  return Character.findOne({ ...{ name } });
};

module.exports = {
  queryCharacters,
  getCharacterByName,
};
