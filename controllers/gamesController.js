const GameService = require("../services/gameService.js")

class GameController {

    static findAll = async (req, res, next) => {
        try {
            const games = await GameService.findAll(req.query);

            res.status(200).json(games);
        } catch(err) {
            next(err);
        }
    }

    static findOne = async (req, res, next) => {

        try {
            const game = await GameService.findOne(req.params);

            if(!game) {
                throw {name: "ErrorNotFound"}
            }
            return res.status(200).json(game);
        } catch(err) {
            next(err);
        }
    }

    static create = async (req, res, next) => {

        try {
            // req.file => file images
            // req.body => data games
            console.log(req.file, req.body, "<<<<<<<<<<<")

            const game = await GameService.create(req.file, req.body); 

            res.status(201).json({message: "Game created successfully"})
        } catch(err) {
            next(err);
        }
    }

    static update = async (req, res, next) => {
        try {
            const game = await GameService.update(req.params, req.file, req.body);
            res.status(200).json({message: "Game updated successfully"})
        } catch(err) {
            next(err);
        }
    }

    static destroy = async (req, res, next) => {
        
        try {
            const game = await GameService.destroy(req.params);

            if(!game) {
                throw {name: "ErrorNotFound"}
            }

            res.status(200).json({message: "Game deleted successfully"})
        } catch(err) {
            next(err)
        }
    }

}

module.exports = GameController;