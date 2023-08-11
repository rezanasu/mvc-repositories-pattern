const express = require("express");
const router = express.Router();
const GenreController = require("../controllers/genresController.js")

router.post("/", GenreController.create);

module.exports = router;