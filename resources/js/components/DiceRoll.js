import React from 'react';

const DiceRoll = (num) => {
  
  const rollValue = Number(((Math.random() * num) + 1).toFixed(0))
  return ( 
    rollValue
  )
}

export { DiceRoll as default }
