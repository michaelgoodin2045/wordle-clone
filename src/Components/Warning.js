import React from 'react';

const Warning = ({ warning, message }) => {
  return (
    <div className={warning ? 'warning show-warning' : 'warning'}>
      <h2 className="warning-text">{message}</h2>
    </div>
  );
};

export default Warning;
