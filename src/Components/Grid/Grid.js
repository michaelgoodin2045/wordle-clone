import React from 'react';
import PropTypes from 'prop-types';
import Completed from './Completed';
import CurrentRow from './CurrentRow';
import StarterRow from './StarterRow';

const Grid = ({ guesses, currentGuess }) => {
  const notUsed =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : [];
  return (
    <div className="grid">
      {guesses.map((guess, index) => (
        <Completed key={index} guess={guess} />
      ))}
      {guesses.length < 6 && <CurrentRow guess={currentGuess} />}
      {notUsed.map((_, index) => (
        <StarterRow key={index}></StarterRow>
      ))}
    </div>
  );
};

Grid.myPropTypes = {
  guesses: PropTypes.arrayOf(PropTypes.string),
  currentGuess: PropTypes.string,
};

export default Grid;
