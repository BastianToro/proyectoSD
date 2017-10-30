const movie = require('../models/movie');

module.exports = function (app) {

	app.get('/movies', (req, res) => {
		movie.getMovies((err, data) => {
			res.json(data);
		});
	});

	app.get('/movies/:id', (req, res) => {
		const movieData = {
			movieid: req.params.id,
			title: req.body.title,
			year: req.body.year
		};

		movie.getMoviesId(movieData, (err, data) => {
			res.json(data);
		});
	});
};