const express = require("express");
const validate = require("../../middlewares/validate");
const characterValidation = require("../../validations/character.validation");
const characterController = require("../../controllers/character.controller");

const router = express.Router();

router
  .route("/")
  .get(
    validate(characterValidation.getCharacters),
    characterController.getCharacters
  );

router
  .route("/:characterName")
  .get(
    validate(characterValidation.getCharacter),
    characterController.getCharacter
  );

module.exports = router;
