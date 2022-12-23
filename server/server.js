const path = require("path");
const express = require("express");

var app = express();
app.use(express.static(path.join(__dirname, "../public")));
const port = 1021;

app.listen(port, () => {
  console.log(`Server is running time server ${port} `);
});
