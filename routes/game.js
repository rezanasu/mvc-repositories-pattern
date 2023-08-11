const express = require("express");
const router = express.Router();
const GameController = require("../controllers/gamesController");
const upload = require("../middlewares/multer.js")


router.get("/", GameController.findAll);
router.get("/:id", GameController.findOne);
router.post("/", upload.single("image"), GameController.create);
router.put("/:id", upload.single("image"), GameController.update);
router.delete("/:id", GameController.destroy);

module.exports = router;