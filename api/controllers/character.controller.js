const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const {
  characterService,
  materialService,
  translationService,
} = require("../services");

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
      ...character._doc,
      name: translation.translation,
    });
  }
  characters.sort((a, b) => a.name.localeCompare(b.name));
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

  const materials = await materialService.getMaterialByName(character.mats);
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

  character.mats = materials;
  res.send(character);
});

module.exports = {
  getCharacters,
  getCharacter,
};
