const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const DATA_FILE = 'data.json';

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).type('text/html').send(data);
    }
  });
});

app.get('/style.css', (req, res) => {
  const filePath = path.join(__dirname, 'style.css');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).type('text/css').send(data);
    }
  });
});

app.get('/data', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).type('application/json').send(data);
    }
  });
});

app.use(express.json());

app.post('/submit', (req, res) => {
  let postData = req.body;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      const jsonData = JSON.parse(data);
      jsonData.push(postData);

      fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
        if (err) {
          res.status(500).send('Internal Server Error');
        } else {
          res.redirect('/');
        }
      });
    }
  });
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

const port = 3000;
app.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
});