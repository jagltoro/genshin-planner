const { Material } = require("../models");

/**
 * Get Material by ids
 * @param {Array} ids
 * @returns {Promise<Material>}
 */
const getMaterialByName = async (ids) => {
  return Material.find({ id: { $in: ids } });
};

module.exports = {
  getMaterialByName,
};
