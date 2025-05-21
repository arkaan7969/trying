
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  const userInput = req.query.name;
  res.send("<div>" + userInput + "</div>"); // ❌ reflected XSS
});
