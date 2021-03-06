var firebase = require('firebase/app')
require('firebase/database')

// Firebase initialization

var firebaseConfig = {
	apiKey: "AIzaSyBGqmO0pz6CuC0mDcTX12kFXb2EshYwyKo",
	authDomain: "first-80ba4.firebaseapp.com",
	databaseURL: "https://first-80ba4.firebaseio.com",
	projectId: "first-80ba4",
	storageBucket: "first-80ba4.appspot.com",
	messagingSenderId: "766839545633",
	appId: "1:766839545633:web:d0f0af53e08c6734",
}
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function storeUserData(user_id, venmo_name, game, price) {
	firebase.database().ref('users/' + userId).set({
		venmo_name: name,	//user's venmo user name
		game: game,			//which game (Auburn, etc...)
		price: price
	});
}


// Done with Firebase
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
