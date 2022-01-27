import React from 'react';
import Key from './Key';
import KeySpecial from './KeySpecial';
import { getKeyStatus } from '../../Lib/utils';

const Keyboard = ({ guesses, gridChar, deleteLetter, onEnter }) => {
  const charStatuses = getKeyStatus(guesses);

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
        <Key onClick={onClick} value="Q" status={charStatuses['Q']} />
        <Key onClick={onClick} value="W" status={charStatuses['W']} />
        <Key onClick={onClick} value="E" status={charStatuses['E']} />
        <Key onClick={onClick} value="R" status={charStatuses['R']} />
        <Key onClick={onClick} value="T" status={charStatuses['T']} />
        <Key onClick={onClick} value="Y" status={charStatuses['Y']} />
        <Key onClick={onClick} value="U" status={charStatuses['U']} />
        <Key onClick={onClick} value="I" status={charStatuses['I']} />
        <Key onClick={onClick} value="O" status={charStatuses['O']} />
        <Key onClick={onClick} value="P" status={charStatuses['P']} />
      </div>
      <div className="keyboard-row middle">
        <Key onClick={onClick} value="A" status={charStatuses['A']} />
        <Key onClick={onClick} value="S" status={charStatuses['S']} />
        <Key onClick={onClick} value="D" status={charStatuses['D']} />
        <Key onClick={onClick} value="F" status={charStatuses['F']} />
        <Key onClick={onClick} value="G" status={charStatuses['G']} />
        <Key onClick={onClick} value="H" status={charStatuses['H']} />
        <Key onClick={onClick} value="J" status={charStatuses['J']} />
        <Key onClick={onClick} value="K" status={charStatuses['K']} />
        <Key onClick={onClick} value="L" status={charStatuses['L']} />
      </div>
      <div className="keyboard-row bottom">
        <KeySpecial onClick={onClick} value="Ent" />
        <Key onClick={onClick} value="Z" status={charStatuses['Z']} />
        <Key onClick={onClick} value="X" status={charStatuses['X']} />
        <Key onClick={onClick} value="C" status={charStatuses['C']} />
        <Key onClick={onClick} value="V" status={charStatuses['V']} />
        <Key onClick={onClick} value="B" status={charStatuses['B']} />
        <Key onClick={onClick} value="N" status={charStatuses['N']} />
        <Key onClick={onClick} value="M" status={charStatuses['M']} />
        <KeySpecial onClick={onClick} value="Del" />
      </div>
    </div>
  );
};

export default Keyboard;
