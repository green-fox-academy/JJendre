const express = require('express');
const app = express();
const PORT = 3000;
const yodaWords = ['Uhm..', 'Argh..', 'Hmm..', 'Err..'];

app.use(express.json());

app.post('/sith', (req, res) => {
  const input = req.body.text;
  if (input === undefined || input === '') {
    res.json({
      error: 'Feed me some text you have to, padawan young you are. Hmmm.',
    });
  } else {
    res.json({
      sith_text: yodaSpeaks(input.trim()),
    });
  }
});
app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

function yodaSpeaks(input) {
  let result = '';
  let sequences = [];
  let sentences = input.split('.');
  sentences.forEach((sentence) => {
    if (sentence === '') return;
    sentence = sentence.trim();
    let words = sentence.split(' ');
    if (words.length === 1) {
      sequences = [
        ...sequences,
        words[0] + '.',
        yodaWords[Math.round(Math.random() * 4)],
      ];
      return;
    }
    for (let i = 0; i < Math.round(words.length / 2); i++) {
      let tmp = words[i * 2];
      words[i * 2] = words[i * 2 + 1];
      words[i * 2 + 1] = tmp;
    }
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    words[1] = words[1].toLowerCase();
    words[words.length - 1] += '.';
    sequences = [
      ...sequences,
      ...words,
      yodaWords[Math.floor(Math.random() * 4)],
    ];
  });
  sequences.forEach((sequence) => {
    result += sequence + ' ';
  });
  return result;
}
