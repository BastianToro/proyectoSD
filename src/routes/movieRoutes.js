const movie = require('../models/movie');

module.exports = function (app) {

	app.get('/movies', (req, res) => {
		movie.getMovies((err, data) => {
			res.json(data);
		});
	});
};