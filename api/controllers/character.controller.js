const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { characterService, translationService } = require("../services");

const getCharacters = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["name", "role"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await characterService.queryCharacters(filter, options);

  const characters = [];

  for (let character of result.results) {
    let translation = await translationService.getTranslationByName(
      character.name
    );
    characters.push({
      translation: translation.translation,
      ...character._doc,
    });
  }
  characters.sort((a, b) => a.translation.localeCompare(b.translation)); // Change model to support character name
  result.results = characters;

  res.send(result);
});

const getCharacter = catchAsync(async (req, res) => {
  const character = await characterService.getCharacterByName(
    req.params.characterName
  );
  if (!character) {
    throw new ApiError(httpStatus.NOT_FOUND, "Character not found");
  }
  res.send(character);
});

module.exports = {
  getCharacters,
  getCharacter,
};
