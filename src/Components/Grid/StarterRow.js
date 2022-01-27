import React from 'react';
import Cell from './Cell';

const StarterRow = () => {
  const starterRow = Array.from(Array(5));

  return (
    <div className="row empty">
      {starterRow.map((_, index) => (
        <Cell key={index} index={index} />
      ))}
    </div>
  );
};

export default StarterRow;
