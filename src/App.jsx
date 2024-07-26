import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("white")  

  return (
    
      <div className="  w-full h-screen "
       style={{backgroundColor : color}}
       >
        <div className="fixed bottom-12 inset-x-0 justify-center  flex  py-2 ">
        <div className="bg-white flex flex-wrap px-4 py-2 rounded-full">
          <button className='mx-3 px-5 rounded-full py-2 text-white' style={{backgroundColor: "red"}} onClick={() => {setcolor("red")}}>Red</button>
          <button className='mx-3 px-5 rounded-full py-2' style={{backgroundColor: "green"}} onClick={() => {setcolor("Green")}}>Green</button>
          <button className='mx-3 px-5 rounded-full py-2 text-white' style={{backgroundColor: "Black"}} onClick={() => {setcolor("Black")}}>Black</button>
          <button className='mx-3 px-5 rounded-full py-2' style={{backgroundColor: "Yellow"}} onClick={() => {setcolor("Yellow")}}>Yellow</button>
          
        </div>
        </div>
       </div>
    
  )
}

export default App
