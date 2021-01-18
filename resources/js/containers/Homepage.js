import React from 'react';
import ReactDOM from 'react-dom';


const rollDice = () => {
  return (
    (Math.random() * 21).toFixed(0)
  )
}


const Homepage = () => {
  return (
    <div>
      <p>Your 1d20 roll = {rollDice()}</p>
    </div>
  )
}


export { Homepage as default }

if (document.getElementById('example')) {
  ReactDOM.render(<Homepage />, document.getElementById('example'));
}
