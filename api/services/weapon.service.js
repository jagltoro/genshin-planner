const { Weapon } = require("../models");

/**
 * Query for Weapon
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryWeapons = async (filter, options) => {
  const weapons = await Weapon.paginate(filter, options);
  return weapons;
};

/**
 * Get user by name
 * @param {String} name
 * @returns {Promise<Weapon>}
 */
const getWeaponByName = async (name) => {
  return Weapon.findOne({ ...{ name } });
};

module.exports = {
  queryWeapons,
  getWeaponByName,
};
