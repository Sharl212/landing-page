const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const PORT = env.process.PORT;
const request = require("request");
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './client-side/public/')));


const mailchimpInstance = 'us19',
  listUniqueId = '9aeee1b52d',
  mailchimpApiKey = '5edc15544eb42ed8d09afef7035690a9-us19';

app.post('/addemail', function (req, res) {
  console.log(req.body)
  request
    .post({
      url: 'https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/',
      body: {
        email_address: req.body.email,
        status: "subscribed"
      },
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Basic ' + new Buffer('any:' + mailchimpApiKey).toString('base64')
      },
      json: true
    },
    (err, response, body) => {
      console.log(response.body)
      if (response.body.status == "subscribed") {
        return res.status(200).send()
      } else {
        return res.status(400).send(response.status)
      }
    })
});

app.listen(PORT, () => console.log(`beep on ${PORT}..`))
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;