import React from 'react';
import propTypes from 'prop-types';
import Cell from './Cell';
import { getGuessStatus } from '../../Lib/utils';

const Completed = ({ guess }) => {
  const statuses = getGuessStatus(guess);
  const finish = 'finish';
  return (
    <div className="row completed">
      {guess.split('').map((letter, index) => (
        <Cell
          key={index}
          value={letter}
          status={statuses[index]}
          index={index}
          finish={finish}
        />
      ))}
    </div>
  );
};

Completed.myPropsType = {
  guess: propTypes.string,
};
export default Completed;
