var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello jenkins CI. how are you today?');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
