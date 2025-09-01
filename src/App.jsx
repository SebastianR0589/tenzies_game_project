import './App.css'
import Die from './components/Die.jsx'
import React from 'react'
import { nanoid } from 'nanoid'

import Confetti from 'react-confetti'



function App() {

  const [diceState, setDiceState] = React.useState(() => generateAllNewDice()) 
  
  const diceElements = diceState.map(dieObj => <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} holdDice={holdDice} id={dieObj.id}/>)  //“for this number, make a Die component”

  const gameWon =  diceState.every(die => die.isHeld) && diceState.every(die => die.value === diceState[0].value)



  function generateAllNewDice() {
    let diceArray = [] 
      for (let i = 0; i < 10; i++) {
        diceArray.push( Math.ceil(Math.random() * 6))
      }
      return diceArray.map(num => ({value: num, isHeld: false, id:nanoid()}))
    }

function rollDice() {
  setDiceState(prevState =>
    prevState.map(die => 
      !die.isHeld ? { ...die, value: Math.ceil(Math.random() * 6) } : die
    )
  )
}

function holdDice(id) {
  setDiceState(prevState =>
    prevState.map(die => 
      die.id === id ? {...die, isHeld: !die.isHeld} : die
    )
  )
}

function handleButtonClick() {
  if (gameWon) {
    setDiceState(generateAllNewDice());
  } else {
    rollDice();
  }
}


  return (

    <main>
    <h1>Tenzies</h1>
    <p className="instructions">To win all dice need to match. Click the dice with the right number to keep it. Reroll untill you won.</p>
    <div className='dice-container'>
     {diceElements}
     </div>

     <button className="roll-dice-button" onClick={handleButtonClick}>{gameWon ? "Play Again" : "Roll Dice"}</button>
      {gameWon && <Confetti/>}
    </main>

  )
}

export default App
