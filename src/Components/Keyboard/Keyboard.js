import React from 'react';
import Key from './Key';
import KeySpecial from './KeySpecial';

const Keyboard = ({ guesses, gridChar, deleteLetter, onEnter }) => {
  const onClick = (value) => {
    if (value === 'Ent') {
      onEnter();
    } else if (value === 'Del') {
      deleteLetter();
    } else {
      gridChar(value);
    }
  };

  return (
    <div className="keyboard">
      <div className="keyboard-row top">
        <Key onClick={onClick} value="Q" />
        <Key onClick={onClick} value="W" />
        <Key onClick={onClick} value="E" />
        <Key onClick={onClick} value="R" />
        <Key onClick={onClick} value="T" />
        <Key onClick={onClick} value="Y" />
        <Key onClick={onClick} value="U" />
        <Key onClick={onClick} value="I" />
        <Key onClick={onClick} value="O" />
        <Key onClick={onClick} value="P" />
      </div>
      <div className="keyboard-row middle">
        <Key onClick={onClick} value="A" />
        <Key onClick={onClick} value="S" />
        <Key onClick={onClick} value="D" />
        <Key onClick={onClick} value="F" />
        <Key onClick={onClick} value="G" />
        <Key onClick={onClick} value="H" />
        <Key onClick={onClick} value="J" />
        <Key onClick={onClick} value="K" />
        <Key onClick={onClick} value="L" />
      </div>
      <div className="keyboard-row bottom">
        <KeySpecial onClick={onClick} value="Ent" />
        <Key onClick={onClick} value="Z" />
        <Key onClick={onClick} value="X" />
        <Key onClick={onClick} value="C" />
        <Key onClick={onClick} value="V" />
        <Key onClick={onClick} value="B" />
        <Key onClick={onClick} value="N" />
        <Key onClick={onClick} value="M" />
        <KeySpecial onClick={onClick} value="Del" />
      </div>
    </div>
  );
};

export default Keyboard;
