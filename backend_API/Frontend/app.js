const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.use(express.json());

app.use(express.static('assets'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

app.get('/doubling', (req, res) => {
  const input = req.query.input;
  res.json({
    received: parseInt(input),
    result: parseInt(input * 2),
    error: 'Please provide an input!',
  });
});

app.get('/greeter', (req, res) => {
  try {
    if (req.query.name && req.query.title) {
      res.json({
        welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
      });
    }
  } catch (err) {
    if (req.query.name === undefined && req.query.title === undefined) {
      res.status(400).send();
      res.json({
        error: 'Please provide a name and a title!',
      });
      return;
    } else if (req.query.name === undefined) {
      res.status(400).send();
      res.json({
        error: 'Please provide a name!',
      });
      return;
    } else if (req.query.title === undefined) {
      res.status(400).send();
      res.json({
        error: 'Please provide a title!',
      });
      return;
    }
  }
});

app.get('/appenda/:appendable', (req, res) => {
  try {
    if ('appendable' !== undefined) {
      res.json({
        appended: `${req.params.appendable}a`,
      });
    }
  } catch (err) {
    res.status(500).send();
    return;
  }
});

function addUntil(number) {
  let sum;
  if (number === 1) {
    return 1;
  } else {
    return parseInt(number) + addUntil(number - 1);
  }
}
function multiplyUntil(number) {
  if (number === 1) {
    return 1;
  } else {
    return parseInt(number) * multiplyUntil(number - 1);
  }
}

app.post('/dountil/:action', (req, res) => {
  let until = req.body.until;
  let action = req.params.action;
  if (action === 'sum') {
    if (until !== undefined) {
      res.send({ result: addUntil(until) });
    } else {
      res.send({ error: 'Please provide a number!' });
    }
  } else if (action === 'factor') {
    if (until !== undefined) {
      res.send({ result: multiplyUntil(until) });
    } else {
      res.send({ error: 'Please provide a number!' });
    }
  } else {
    res.send({ error: 'Please provide an action and a number!' });
  }
});

//http://127.0.0.1:3000/
