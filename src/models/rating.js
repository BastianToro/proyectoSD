const mysql = require('mysql');

connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'imdb_full'
});

let ratingModel = {};

ratingModel.getRatingId = (ratingData, callback) => {
	if(connection){
		sql = 'SELECT * FROM ratings where movieid=?';
		connection.query(
			sql, ratingData.movieid,
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

module.exports = ratingModel;