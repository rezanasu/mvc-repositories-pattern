const GenreService = require("../services/genreService.js")

class GenreController {

    static create = async (req, res, next) => {
        try {
            const genre = await GenreService.create(req.body);

            res.status(201).json({message: "Genre created successfully"});
        } catch(err) {
            next(err)
        }
    }

}

module.exports = GenreController;