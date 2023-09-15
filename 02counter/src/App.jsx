import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15

  let [counter, setCounter] =  useState(0)

  const addValue = () => {
    // console.log("Cliked", counter);
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  const logic = () => {
    console.log(logic);
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter Value: {counter}</h2>

     <button
     onClick={()=> counter > 19 ? "" : setCounter(counter + 1)}
     >Add Value {counter}</button>
     <br />
     <button 
     onClick={() => counter < 1 ? "" : setCounter(counter - 1)}
     >remove Value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
