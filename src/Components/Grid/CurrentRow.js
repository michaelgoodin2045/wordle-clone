import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const CurrentRow = ({ guess }) => {
  const splitGuess = guess.split('');
  const emptyCells = Array.from(Array(5 - splitGuess.length));

  return (
    <div className="row current">
      {splitGuess.map((letter, index) => (
        <Cell key={index} value={letter} />
      ))}
      {emptyCells.map((_, index) => (
        <Cell key={index} />
      ))}
    </div>
  );
};

CurrentRow.myPropTypes = {
  guess: PropTypes.string,
};

export default CurrentRow;
