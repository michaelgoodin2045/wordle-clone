import words from '../Constants/words';
import valid from '../Constants/valid';

export const isValidWord = (word) => {
  return words.includes(word.toLowerCase) || valid.includes(word.toLowerCase);
};

export const isWinningWord = (word) => {
  return solution === word;
};

export const getWordOfTheDay = () => {
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

export const getGuessStatus = (guess) => {
  const splitSolution = solution.split('');
  const splitGuess = guess.split('');
  const solutionCharsUsed = splitSolution.map((_) => false);
  const statuses = Array.from(Array(guess.length));

  splitGuess.forEach((letter, index) => {
    if (letter === splitSolution[index]) {
      statuses[index] = 'correct';
      solutionCharsUsed[index] = true;
    }
  });

  splitGuess.forEach((letter, index) => {
    if (statuses[index]) return;
    if (!splitSolution.includes(letter)) {
      statuses[index] = 'absent';
    }
    const presentCharIndex = splitSolution.findIndex(
      (x, j) => x === letter && !solutionCharsUsed[j]
    );
    if (presentCharIndex > -1) {
      statuses[index] = 'present';
      solutionCharsUsed[presentCharIndex] = true;
      return;
    } else {
      statuses[index] = 'absent';
      return;
    }
  });
  return statuses;
};

export const getKeyStatus = (guesses) => {
  const charStatus = 'absent' || 'present' || 'correct';
  const charObj = { letter: charStatus };

  guesses.forEach((word) => {
    word.split('').forEach((letter, index) => {
      if (!solution.includes(letter)) {
        return (charObj[letter] = 'absent');
      }
      if (letter === solution[index]) {
        return (charObj[letter] = 'correct');
      }

      if (charObj[letter] !== 'correct') {
        return (charObj[letter] = 'present');
      }
    });
  });
  return charObj;
};
