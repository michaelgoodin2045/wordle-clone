import React from 'react';

const Key = ({ value, onClick, status }) => {
  return (
    <div className={`key ${status}`} onClick={() => onClick(value)}>
      {value}
    </div>
  );
};

export default Key;
