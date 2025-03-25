import './App.css'
import { useState } from 'react'
import React from 'react'
function App() {
  const [length,setLength] = useState(6)
  return (
    <>
      <div className='h-screen w-screen bg-gray-600 flex justify-center items-center'>
        <div className='h-6/12 w-6/12 bg-gray-400 rounded-2xl flex justify-center items-center flex-wrap'>
            <input className='h-2/12 w-7/12 bg-gray-300 rounded-full mx-10' type="text" />
            <button className='bg-gray-800 text-white p-3 rounded-2xl w-2/12'>Copy</button>
            <input id='range' className='h-3/12 w-3/12 bg-gray-300 rounded-full mx-3' min={6} max={12} value={length} onChange={(e)=> {setLength(e.target.value)}} type="range" />
            <label className='mx-5'>Length {length}</label>
            <input className='mx-3' type="checkbox" />
            <label className='mx-3' htmlFor="">Character</label>
            <input className='mx-3' type="checkbox" />
            <label htmlFor="">Number</label>
        </div>
      </div>
    </>
  )
}

export default App