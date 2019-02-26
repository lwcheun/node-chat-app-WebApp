const path = require('path');
const express = require('express');

// https://nodejs.org/api/path.html#path_path_join_paths
const publicPath = path.join(__dirname, '../public');

// console.log(__dirname + '/../public');
// console.log(publicPath);

const port = process.env.PORT || 3000;
var app = express();


app.use(express.static(publicPath));


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});