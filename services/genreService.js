const GenreRepository = require("../repositories/genreRepository.js")

class GenreService {


    static create = async (params) => {
        try {

            const {title} = params;

            const genre = await GenreRepository.create({title});
            return genre;
        } catch(err) {
            console.log(err)
        }
    }

}

module.exports = GenreService;