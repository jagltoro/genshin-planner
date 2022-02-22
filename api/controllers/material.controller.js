const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { materialService, translationService } = require("../services");

const getMaterials = catchAsync(async (req, res) => {
  const ids = pick(req.query, ["id"]);
  const result = await materialService.getMaterialByName(ids);

  // const characters = [];

  // for (let character of result.results) {
  //   let translation = await translationService.getTranslationByName(
  //     character.name
  //   );
  //   characters.push({
  //     translation: translation.translation,
  //     ...character._doc,
  //   });
  // }
  // characters.sort((a, b) => a.translation.localeCompare(b.translation)); // Change model to support character name
  // result.results = characters;

  res.send(result);
});

module.exports = {
  getMaterials,
};
