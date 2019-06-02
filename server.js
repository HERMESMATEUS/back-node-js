var express = require("express");
var Json = require("./JSONbasedata.json");
var cors = require('cors')
var app = new express();

//******************* */

app.use(cors())

app.get('/hotels', (req, res) => {
  console.log("/getToken");
  res.status(200).send(Json)
});


//******************* */
/* 
    Params of search
    stars
    name
*/
app.get("/filter_hotels", (req, res) => {
  console.log("/filter_hotels");

  var stars = req.query && req.query.stars;
  var name = req.query && req.query.name;

  let filterStars = Json;

  if (stars) {
    filterStars = Json.filter(hotel => hotel.stars == stars);
  }
  if (name) {
    filterStars = filterStars.filter(hotel => hotel.name == name);
  }

  console.log('filterStars: ', filterStars);

  res.status(200).send(filterStars)
});


//******************* */

app.get('/', function (req, res) {
  res.send();
});

//******************* */

app.use(express.static(__dirname + '/public'));
app.listen(8080);