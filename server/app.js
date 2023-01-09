require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const { PORT = 3000 } = require('./config/config');

const app = express();

app.use(cors());

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

app.listen(PORT, () => {
  console.log(`Server is running... http://localhost:${PORT}`);
});
