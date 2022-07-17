var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.use(
	express.static(path.join(__dirname, '/../frontend/build'), { index: false })
);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/../frontend/build/index.html'));
});

module.exports = app;
