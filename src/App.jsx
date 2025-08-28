import './App.css'
import Die from './components/Die.jsx'
import React from 'react'




function App() {

  const [diceState, setDiceState] = React.useState(generateAlllNewDice())

  const diceElements = diceState.map(num => <Die value={num} />)  //“for this number, make a Die component”


  function generateAlllNewDice() {
    let diceArray = [] 
      for (let i = 0; i < 10; i++) {
        diceArray.push( Math.ceil(Math.random() * 6))
      }
      return diceArray
    }


  return (

    <main>
    <h1>Tenzies</h1>
    <div className='dice-container'>
     {diceElements}
     </div>
    </main>

  )
}

export default App
