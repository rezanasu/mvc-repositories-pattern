const express = require("express");
const router = express.Router();
const gameRouter = require("./game.js")
const genreRouter = require("./genre.js")


router.use("/games", gameRouter);
router.use("/genres", genreRouter);



module.exports = router;