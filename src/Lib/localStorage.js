const key = 'gameState';

const storedGameState = {
  guesses: [],
  solution: '',
};

export const saveToLocalStorage = (gameState, storedGameState) => {
  localStorage.setItem(key, JSON.stringify(gameState));
};

export const loadFromLocalStorage = () => {
  const state = localStorage.getItem(key);

  //  return state ? JSON.parse(state as storedGameState) : null;
};
