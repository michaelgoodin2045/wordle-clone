import React from 'react';
import propTypes from 'prop-types';
import Cell from './Cell';

const Completed = ({ guess }) => {
  //const statuses = getGuessStatuses(guess);
  const statuses = guess;
  return (
    <div className="row completed">
      {guess.split('').map((letter, index) => (
        <Cell key={index} value={letter} status={statuses[index]} />
      ))}
    </div>
  );
};

Completed.myPropsType = {
  guess: propTypes.string,
};
export default Completed;
