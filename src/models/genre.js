const mysql = require('mysql');

connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'imdb_full'
});

let genreModel = {};

genreModel.getGenresId = (genreData, callback) => {
	if(connection){
		sql = 'SELECT * FROM genres where movieid=?';
		connection.query(
			sql, genreData.movieid,
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

genreModel.getGenresMovie = (genreData, callback) => {
	if(connection){
		sql = 'SELECT * FROM genres where genre=?';
		connection.query(
			sql, genreData.genre,
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

module.exports = genreModel;