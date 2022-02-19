const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('OK!');
});
app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

app.post('/arrays', (req, res) => {
  let operation = req.body;

  if (operation === undefined) {
    res
      .status(404)
      .json({ error: 'Please provide what to do with the numbers!' });
  } else if (operation.numbers === undefined || operation.what === undefined) {
    res
      .status('404')
      .json({ error: 'Please provide what to do with the numbers!' });
  } else if (operation.what === 'sum') {
    let count = 0;
    for (let i = 0; i < operation.numbers.length; i++) {
      count += operation.numbers[i];
    }
    res.status(200).json({ result: count });
  } else if (operation.what === 'multiply') {
    let multiply = 1;
    for (let i = 0; i < operation.numbers.length; i++) {
      multiply *= operation.numbers[i];
    }
    res.status(200).json({ result: multiply });
  } else if (operation.what === 'double') {
    let results = [];
    for (let i = 0; i < operation.numbers.length; i++) {
      results.push(operation.numbers[i] * 2);
    }
    res.status(200).json({ result: results });
  }
});
