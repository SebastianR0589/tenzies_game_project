import './App.css'
import Die from './components/Die.jsx'
import React from 'react'
import { nanoid } from 'nanoid'



function App() {

  const [diceState, setDiceState] = React.useState(generateAlllNewDice()) 
  
  const diceElements = diceState.map(dieObj => <Die key={dieObj.id} value={dieObj.value} />)  //“for this number, make a Die component”


  function generateAlllNewDice() {
    let diceArray = [] 
      for (let i = 0; i < 10; i++) {
        diceArray.push( Math.ceil(Math.random() * 6))
      }
      return diceArray.map(num => ({value: num, isHeld: false, id:nanoid()}))
    }

  function rollDice() {
    setDiceState(generateAlllNewDice()) 
  }


  return (

    <main>
    <h1>Tenzies</h1>
    <div className='dice-container'>
     {diceElements}
     </div>

     <button className="roll-dice-button" onClick={rollDice}>Roll Dice</button>
    </main>

  )
}

export default App
