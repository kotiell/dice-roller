import React from 'react';

const DiceRoll = (num, rollModify) => {
  
  const rollValue = Number(((Math.random() * num) + 1).toFixed(0)) + Number(rollModify)

  return ( 
    rollValue
  )
}

export { DiceRoll as default }
