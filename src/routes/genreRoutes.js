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

	app.get('/genre/type/:genre', (req, res) => {
		const genreData = {
			movieid: req.body.id,
			genre: req.params.genre
		};

		genre.getGenresMovie(genreData, (err, data) => {
			res.json(data);
		});
	});
};