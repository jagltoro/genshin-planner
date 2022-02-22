const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const {
  weaponService,
  materialService,
  translationService,
} = require("../services");

const getWeapons = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["name", "role"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await weaponService.queryWeapons(filter, options);

  const weapons = [];

  for (let weapon of result.results) {
    let translation = await translationService.getTranslationByName(
      weapon.name
    );
    weapons.push({
      translation: translation.translation,
      ...weapon._doc,
    });
  }
  weapons.sort((a, b) => a.translation.localeCompare(b.translation)); // Change model to support weapon name
  result.results = weapons;

  res.send(result);
});

const getWeapon = catchAsync(async (req, res) => {
  const weapon = await weaponService.getWeaponByName(req.params.weaponName);
  if (!weapon) {
    throw new ApiError(httpStatus.NOT_FOUND, "Weapon not found");
  }

  const materials = await materialService.getMaterialByName(weapon.mats);
  for (let material of materials) {
    let materialSource = [];
    const translation = await translationService.getTranslationByName(
      material.name
    );

    for (source of material.source) {
      const translation = await translationService.getTranslationByName(source);
      if (translation) {
        materialSource.push(translation.translation);
      } else {
        console.log(source);
      }
    }
    material.name = translation.translation;
    material.source = materialSource;
  }

  weapon.mats = materials;

  res.send(weapon);
});

module.exports = {
  getWeapons,
  getWeapon,
};
