import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');

  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200' style={
      {backgroundColor: color}
    }>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white'>
        <button 
        onClick={()=>setColor("red")}
        className='oultine-none px-4 py-1 rounded-full shadow-lg'
        style={{backgroundColor: 'red'}}>red</button>
        <button 
        onClick={()=>setColor("blue")}
        className='oultine-none px-4 py-1 rounded-full shadow-lg'
        style={{backgroundColor: 'blue'}}>blue</button>
      </div>
      </div>
      
    </div>
  )
}

export default App
