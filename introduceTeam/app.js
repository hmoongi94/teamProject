const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, './public/static')))
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});