import React from 'react';

const Warning = ({ warning, alerts, idx }) => {
  return (
    <div className={warning ? 'warning show-warning' : 'warning'}>
      {alerts.map((alert, index) => {
        return (
          <div className={idx === index ? 'message-item' : 'none'} key={index}>
            <h2 className="message-text">{alert}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Warning;
