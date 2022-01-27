import React from 'react';

const Cell = ({ value, status, index, finish }) => {
  return (
    <div className="cell">
      <div className={`${finish} ${status} c${index}`}>{value}</div>
    </div>
  );
};

export default Cell;
