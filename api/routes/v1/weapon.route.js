const express = require("express");
const validate = require("../../middlewares/validate");
const weaponValidation = require("../../validations/weapon.validation");
const weaponController = require("../../controllers/weapon.controller");

const router = express.Router();

router
  .route("/")
  .get(validate(weaponValidation.getWeapons), weaponController.getWeapons);

router
  .route("/:weaponName")
  .get(validate(weaponValidation.getWeapon), weaponController.getWeapon);

module.exports = router;
