import React from 'react';

const Key = ({ value, onClick }) => {
  return (
    <div className="key" onClick={() => onClick(value)}>
      {value}
    </div>
  );
};

export default Key;
