import React, { useState } from 'react';
import ReactDOM from 'react-dom';






const Homepage = () => {

  const [diceRoll, setDiceRoll] = useState(0);
  const [rollModify, setRollModify] = useState(0);

  const rollDice = (num) => {
    setDiceRoll(Number(((Math.random() * num) + 1).toFixed(0)) + Number(rollModify));
    console.log(diceRoll + ' + ' + rollModify);
  }

  return (
    <div>
      <div id="roll-area">{diceRoll}</div>
      <input
        value={rollModify}
        onChange={event => setRollModify(event.target.value)}
      />

      <button onClick={() => { rollDice(3) }}>4</button>
      <button onClick={() => { rollDice(5) }}>6</button>
      <button onClick={() => { rollDice(7) }}>8</button>
      <button onClick={() => { rollDice(9) }}>10</button>
      <button onClick={() => { rollDice(11) }}>12</button>
      <button onClick={() => { rollDice(19) }}>20</button>
    </div>
  )
}


export { Homepage as default }

if (document.getElementById('example')) {
  ReactDOM.render(<Homepage />, document.getElementById('example'));
}
