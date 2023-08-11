const {Game, Genre, GameGenre} = require("../models")

class GameRepository {

    static findAll = async (params = {}) => {
        try {
            const games = await Game.findAll(params);
            return games;
        } catch(err) {
            console.log(err, "<<<<<");
        }
    }

    static findOne = async (id) => {

        try {

            const game = await Game.findOne({
                where: {
                    id
                },
                include: {
                    model: Genre
                }
            })

            return game;
        } catch(err) {
            console.log(err, "<<<<<");
        }

    }

    static create = async (payload, genres = []) => {
        try {

            const game = await Game.create(payload);

            for(let i = 0; i < genres.length; i++) {
                await GameGenre.create({
                    game_id: game.id,
                    genre_id: +genres[i]
                })
            }
            return game;
        } catch(err) {
            console.log(err);
        }
    }

    static update = async (id, payload, genres = []) => {

        try {

            const game = await Game.update(payload, {
                where: {
                    id
                }
            })

            return game;
        } catch(err) {
            console.log(err);
        }
    }

    static destroy = async (id) => {
        try {

            const game = await Game.destroy({
                where: {
                    id
                }
            });

            return game;
        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = GameRepository;