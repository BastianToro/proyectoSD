const genre = require('../models/genre');

module.exports = function (app) {
	app.get('/genre/:id', (req, res) => {
		const genreData = {
			movieid: req.params.id,
			genre: req.body.genre
		};

		genre.getGenresId(genreData, (err, data) => {
			res.json(data);
		});
	});
};