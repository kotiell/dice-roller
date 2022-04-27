import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import DiceRoll from '../components/DiceRoll';

const Homepage = () => {

  const [diceRoll, setDiceRoll] = useState(0);
  const [rollModify, setRollModify] = useState(0);
  const [pastRolls, setPastRolls] = useState([]);

  /*
    To do:
    The text box appears to be showing the previous roll's value

  */
  const rollDice = (num) => {
    setDiceRoll(DiceRoll(num,rollModify));
    //put the map into the ID
    
    document.getElementById('rollHistory').innerHTML = "";
    pastRolls.map(item => {
      document.getElementById('rollHistory').innerHTML += `<div>${item}</div>`
    })
  }

  useEffect(() => {
    if (diceRoll != 0) {
      setPastRolls(pastRolls => [...pastRolls, diceRoll]);
    }
  }, [diceRoll]);



  return (
    <div style={{ padding: '4rem' }}>

      <h1>Dice Roller</h1>

      {/* Modifier Section */}
      <h3 style={{ marginTop: '1rem' }}>Add a modifier to your roll</h3>
      <input
        value={rollModify}
        onChange={event => setRollModify(event.target.value)}
      />

      <h3 style={{ marginTop: '1rem' }}>Choose a dice to Roll</h3>
      <button onClick={() => { rollDice(3) }}>4</button>
      <button onClick={() => { rollDice(5) }}>6</button>
      <button onClick={() => { rollDice(7) }}>8</button>
      <button onClick={() => { rollDice(9) }}>10</button>
      <button onClick={() => { rollDice(11) }}>12</button>
      <button onClick={() => { rollDice(19) }}>20</button>

      {/* Current Dice Roll */}
      <div id="roll-area">You rolled a {diceRoll}</div>

      <h3 style={{ marginTop: '1rem' }}>Past Rolls</h3>
      <div id="rollHistory" style={{ height: '500px', width: '100px', overflowY: 'scroll', border: 'solid 1px #666' }}>
      </div>
    </div>
  )
}


export { Homepage as default }

if (document.getElementById('homepage')) {
  ReactDOM.render(<Homepage />, document.getElementById('homepage'));
}
