const mysql = require('mysql');

connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'imdb_full'
});

let movieModel = {};

movieModel.getMovies = (callback) => {
	if (connection){
		connection.query(
			'SELECT * FROM movies ORDER BY movieid',
			(err, rows) => {
				if(err){
					throw err;
				}
				else{
					callback(null, rows);
				}
			}
		);
	}
};

movieModel.getMoviesId = (movieData, callback) => {
	if(connection){
		sql = 'SELECT * FROM movies where movieid=?';
		connection.query(
			sql, movieData.movieid,
			(err, rows) => {
				if(err){
					throw err;
				}
				else{
					callback(null, rows);
				}
			}
		);
	}
}

module.exports = movieModel;