require("dotenv").config();
const express = require("express");
const db = require("./db.js");
const path = require("path");
const cors = require('cors');

process.env.PORT = process.env.PORT || 3000;

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// Parsing
app.use(cors());
app.use(express.json());

// Routes
app.post('/words', (req, res) => {
   db.save(req.body)
  .then(() => {
    res.status(201).send('posted');
  })
  .catch(() => console.log('duplicate'))
})

app.get('/words', (req, res) => {
  db.getEntries()
  .then(entries => {
    res.status(200).send(entries);
  })
  .catch(() => console.log('error getting entries'))
})



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
