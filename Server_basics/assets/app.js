const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendFile(__dirname + '/index.hu.html'));

app.listen(3000, () => console.log('app listening on port 3000'));
