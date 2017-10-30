const rating = require('../models/rating');

module.exports = function (app) {
	app.get('/rating/:id', (req, res) => {
		const ratingData = {
			movieid: req.params.id,
			rank: req.body.rank,
			votes: req.body.votes,
			distributtion: req.body.distributtion
		};

		rating.getRatingId(ratingData, (err, data) => {
			res.json(data);
		});
	});
};