var express = require("express");

var app = new express();

app.get("/hotels", (req, res) => {
  console.log("/getToken");
  res.send("All hotels !");
});

/* 
    Params of search
    higher_price
    lower_price
    recent
    old

*/

app.get("/filter_hotels", (req, res) => {
  var higher_price = req.query && req.query.higher_price;
  var lower_price = req.query && req.query.lower_price;
  var recent = req.query && req.query.recent;
  var old = req.query && req.query.old;

  console.log("higher_price:", higher_price);
  console.log("lower_price: ", lower_price);
  console.log("recent: ", recent);
  console.log("old: ", old);

  res.send("hotels filtered");
});

app.listen(8080);
