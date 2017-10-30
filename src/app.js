const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.sendFile(__dirname+'/public/index.html');
});

//routes
require('./routes/movieRoutes')(app);
require('./routes/genreRoutes')(app);
require('./routes/ratingRoutes')(app);

app.listen(app.get('port'), () =>{
	console.log('server on port 3000');
});