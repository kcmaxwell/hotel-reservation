var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const seedRouter = require('./routes/seed');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const whitelist = process.env.WHITELISTED_DOMAINS
	? process.env.WHITELISTED_DOMAINS.split(',').map((item) => item.trim())
	: [];
const corsOptions = {
	origin: function (origin, callback) {
		if (!origin || whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},

	credentials: true,
};
app.use(cors(corsOptions));

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'jest')
  app.use('/api/seed', seedRouter);

app.use(
	express.static(path.join(__dirname, '/../frontend/build'), { index: false })
);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/../frontend/build/index.html'));
});

module.exports = app;
