import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DiceRoll from '../components/DiceRoll';

const Homepage = () => {

  const [diceRoll, setDiceRoll] = useState(0);
  const [rollModify, setRollModify] = useState(0);
  const [pastRolls, setPastRolls] = useState(0);
  const [totalRoll, setTotalRoll] = useState(0);
  const [count, setCount] = useState(0);

  /*
    To do:
    The text box appears to be showing the previous roll's value

  */
  const rollDice = (num) => {
    setDiceRoll(DiceRoll(num));
    setTotalRoll(Number(diceRoll) + Number(rollModify));
    setPastRolls(String(pastRolls) + '\n' + count + String(totalRoll));
    console.log(Number(diceRoll) + Number(rollModify))
    console.log("Total: " + totalRoll + " Rolled a " + diceRoll + " with a modifier of " + rollModify + " count " + count);
    setCount(count + 1);
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
      <div>
        <textarea value={pastRolls} style={{height: '900px', width: '400px'}} />
      </div>
    </div>
  )
}


export { Homepage as default }

if (document.getElementById('homepage')) {
  ReactDOM.render(<Homepage />, document.getElementById('homepage'));
}
