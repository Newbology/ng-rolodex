const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const redis = require('connect-redis')(session);
const users =require('./routes/users');

const PORT = process.env.EXPRESS_CONTAINER_PORT;
const ENV = process.env.NODE_ENV || 'development';
const SESSION_SECRET = process.env.SESSION_SECRET || 'keyboard cat';
const REDIS = process.env.REDIS_HOST_PORT;
const REDIS_URL = process.env.REDIS_URL;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    store: new redis({ url: `${REDIS_URL}:${REDIS}`, logErrors: true }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: ENV === 'production' }
  })
);

app.use(passport.initialize());


app.use('/api', users);
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
