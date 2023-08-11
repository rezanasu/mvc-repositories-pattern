const GameRepository = require("../repositories/gameRepository.js")
// Menjalankan business logic
class GameService {

    static findAll = async (params) => {

        try {
            // Filter games dengan status active
            const filterOptions = {
                where: {}
            }

            const {status} = params;

            if(status) {
                filterOptions.where.status = status;
            }

            const games = await GameRepository.findAll(filterOptions, next);
            return games;
        } catch(err) {
            console.log(err, "<<<<<");
        }
    }

    static findOne = async (params) => {
        try {

            const {id} = params;

            const game = await GameRepository.findOne(id);
            
            return game;

        } catch(err) {
            console.log(err, "<<<<<");
        }
    }

    static create = async (fileImage, params) => {
        try {
            const {title, year, publisher, status, genre_ids} = params;
            let payload = {
                title,
                year,
                publisher,
                status
            }
            

            if(fileImage) {
                let linkImage = `http://localhost:3000/${fileImage.filename}`    
                payload.image = linkImage;
            }


            const game = await GameRepository.create(payload, genre_ids)
            return game;
        } catch(err) {
            console.log(err, "<<<<<")
        }
    }

    static update = async (pathParams, fileImage, params) => {
        try {

            const {id} = pathParams;

            const {title, year, publisher, status, genre_ids} = params;
            let payload = {
                title,
                year,
                publisher,
                status
            }
            console.log(fileImage, "<<<<<<<<<<<<<")
            if(fileImage) {
                let linkImage = `http://localhost:3000/${fileImage.filename}`    
                payload.image = linkImage;
            }

            const game = await GameRepository.update(id, payload, genre_ids);

            return game;

        } catch(err) {
            console.log(err);
        }
    }

    static destroy = async (params) => {

        try {
            const {id} = params;

            const game = await GameRepository.destroy(id);

            return game;
        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = GameService;