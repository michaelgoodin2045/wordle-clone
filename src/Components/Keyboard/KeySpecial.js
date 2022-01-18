import React from 'react';

const KeySpecial = ({ value, onClick }) => {
  return (
    <div onClick={() => onClick(value)} className="key special">
      {value}
    </div>
  );
};

export default KeySpecial;
