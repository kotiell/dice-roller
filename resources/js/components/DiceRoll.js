import React from 'react';

const DiceRoll = (num) => {
  return (
    Number(((Math.random() * num) + 1).toFixed(0))
  )
}

export { DiceRoll as default }
