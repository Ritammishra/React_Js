import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username: "ritam",
    age:23
  }

  let newArray = [1, 2, 3, 4]

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-4">Hello world</h1>
      <Card username="Ritam" someobj={newArray} btnText="Click me"/>
      <Card username={"Ritam Mishra"}/>
    </>
  );
}

export default App
