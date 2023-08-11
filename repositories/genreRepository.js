const {Genre} = require("../models")

class GenreRepository {


    static create = async (payload) => {

        try {
            const genre = await Genre.create(payload);
            return genre;
        } catch(err) {
            next(err);
        }
    }

}

module.exports = GenreRepository;