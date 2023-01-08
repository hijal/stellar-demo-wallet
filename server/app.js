require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});

app.listen(process.env.PORT, () => {
  console.log('Server is running...');
});
