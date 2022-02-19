const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

app.post('/translate', (req, res) => {
  const { lang, text } = req.body;
  if (lang === 'hu') {
    res.json({
      translated: translate(text),
      lang: 'teve',
    });
  } else {
    res.json({
      error: "I can't translate that!",
    });
  }
});

const isVowel = (character) => {
  let lowerCaseChar = character.toLowerCase();
  return [
    'a',
    'á',
    'u',
    'ú',
    'ü',
    'ű',
    'o',
    'ó',
    'ö',
    'ő',
    'e',
    'é',
    'i',
    'í',
  ].some((vowel) => vowel === lowerCaseChar);
};

const translate = (text) => {
  let teveText = text;
  let length = teveText.length;
  let checkedVowels = [];
  for (let i = 0; i < length; i++) {
    let char = teveText[i];
    if (isVowel(char) && !checkedVowels.includes(char)) {
      teveText = teveText.split(char).join(`${char}v${char}`);
      i += 2;
      length += 2;
      checkedVowels.push(char);
    }
  }
  return teveText;
};

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
