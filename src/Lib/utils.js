import words from '../Constants/words';
import valid from '../Constants/valid';

export const isValidWord = (word) => {
  return words.includes(word.toLowerCase) || valid.includes(word.toLowerCase);
};

export const isWinningWord = (word) => {
  return solution === word;
};

export const getWordOfTheDay = () => {
  /*let wordsRandom = [];
  while (words.length !== 0) {
    let randomIndex = Math.floor(Math.random() * words.length);
    wordsRandom.push(words[randomIndex]);
    words.splice(randomIndex, 1);
  } */
  //const newWords = wordsRandom;
  //Start 18 Jan 2022
  const startMs = 1642482000000;
  const now = Date.now();
  const msDay = 86400000;
  const index = Math.floor((now - startMs) / msDay);
  return {
    solution: words[index].toUpperCase(),
    solutionIndex: index,
  };
};

export const { solution, solutionIndex } = getWordOfTheDay();
