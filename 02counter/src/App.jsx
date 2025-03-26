import { useState } from 'react'

import './App.css'

function App() {
  
  const [counter, setCounter] = useState(15) // useState returns us value in the form of an array structured as: [variable, function()]
  //let counter = 15;

  const addValue = () => {
    
    /*
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1) 

     This will also increse the value only by 1, because of a react thing called batching 
    
    In batching, react sees that only one method is being repeatedly so it runs the method only once
    */

    //To avoid the above situation we use callback

    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>React course Practice {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button> {" "}
      <button
      onClick={removeValue}
      >Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
