const express = require('express');
const app = express();

app.get('/', (req: any, res: any) => res.sendFile(__dirname + '/index.html'));

app.listen(3000, () => console.log('app listening on port 3000'));
