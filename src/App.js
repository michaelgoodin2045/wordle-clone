import Title from './Components/Title';
import Grid from './Components/Grid/Grid';
import Keyboard from './Components/Keyboard/Keyboard';
import './css/styles.css';
import { useState } from 'react';

function App() {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');

  const gridChar = (value) => {
    if (currentGuess.length < 5 && guesses.length < 6) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const deleteLetter = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  return (
    <div className="App">
      <Title />
      <Grid guesses={guesses} currentGuess={currentGuess} />
      <Keyboard
        gridChar={gridChar}
        deleteLetter={deleteLetter}
        guesses={guesses}
      />
    </div>
  );
}

export default App;
