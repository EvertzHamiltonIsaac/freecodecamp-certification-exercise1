// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
// app.get('/api/hello', function (req, res) {
//   res.json({ greeting: 'hello API' });
// });

app.get('/api/:date?', function (req, res) {
  const { date } = req.params;
  //Posible valores del parametro:
  // Fecha tipo: 2025-11-01
  // Fecha tipo: 1761978438109
  // Fecha tipo: undefined
  // December%2025,%202015

  const strDate = new Date(
    typeof date === 'undefined' ? Date.now() : +date ? +date : date
  );
  const unixDate = strDate.getTime();
  const utcDate = new Date(unixDate).toUTCString();

  console.log(
    `Standar Date: [${strDate}], Unix Date: [${unixDate}], UTC Date: [${utcDate}]`
  );
  try {
    if (utcDate.includes('Invalid')) throw new Error();
    return res.json({
      unix: unixDate,
      utc: `${utcDate}`,
    });
  } catch (error) {
    res.json({ error: 'Invalid Date' });
  }
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
