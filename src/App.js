import Title from './Components/Title';
import Grid from './Components/Grid/Grid';
import Keyboard from './Components/Keyboard/Keyboard';
import './css/styles.css';
import { useState } from 'react';
import { solution } from './Lib/utils';
import valid from './Constants/valid';
import words from './Constants/words';
import alerts from './Constants/alerts';
import Warning from './Components/Warning';
//import useLocalStorage from './useLocalStorage';

function App() {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [warning, setWarning] = useState(false);
  const [idx, setIdx] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);
  //const [todayWord, setTodayWord] = useLocalStorage('solution', solution);

  const gridChar = (value) => {
    if (currentGuess.length < 5 && guesses.length < 6) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const deleteLetter = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  //console.log(solution, currentGuess);
  //console.log(
  //  valid.includes(currentGuess.toLowerCase()) ||
  //     words.includes(currentGuess.toLowerCase())
  //);
  //console.log(isGameWon);
  //console.log(isGameLost);

  const onEnter = () => {
    if (currentGuess.length < 5) {
      setIdx(0);
      setWarning(true);
      //console.log('Please enter a five letter word!');
      return setTimeout(() => {
        setWarning(false);
      }, 3000);
    }

    if (currentGuess === solution) {
      //console.log('Winner!');
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess('');
      setIdx(3);
      setWarning(true);
      setIsGameWon(true);
      return setTimeout(() => {
        //console.log('Awesome! Come back tomorrow!');
        setWarning(false);
      }, 3000);
    }

    if (
      (valid.includes(currentGuess.toLowerCase()) ||
        words.includes(currentGuess.toLowerCase())) &&
      currentGuess !== solution
    ) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess('');
      if (guesses.length === 5 && !isGameWon) {
        setIdx(2);
        setWarning(true);
        setIsGameLost(true);
        //console.log('You LOSER!');
        return setTimeout(() => {
          setWarning(false);
        }, 3000);
      }
      //console.log('Okay, this is a valid word, but not the solution');
    }
    if (
      !valid.includes(currentGuess.toLowerCase()) &&
      !words.includes(currentGuess.toLowerCase())
    ) {
      //console.log('This is not a super, duper valid word!');
      setIdx(1);
      setWarning(true);
      return setTimeout(() => {
        setWarning(false);
        //console.log('Please delete the bad word');
      }, 2000);
    }
  };

  return (
    <div className="App">
      <Title />
      <Grid guesses={guesses} currentGuess={currentGuess} />
      <Keyboard
        gridChar={gridChar}
        deleteLetter={deleteLetter}
        guesses={guesses}
        onEnter={onEnter}
      />
      <Warning warning={warning} alerts={alerts} idx={idx} />
    </div>
  );
}

export default App;
