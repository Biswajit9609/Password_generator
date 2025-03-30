import './App.css'
import { useState } from 'react'
import React from 'react'
function App() {
  const [length,setLength] = useState(6)
  return (
    <>
      <div className='h-dvh w-dvw bg-gray-600 flex justify-center items-center'>
        <div className='h-full w-full md:h-6/12 md:w-6/12 bg-gray-400 md:rounded-2xl flex flex-wrap'>
        <div className='h-1/12 md:h-4/12 w-full flex justify-center items-center'>
            <h1 className='text-2xl'>Password Generator</h1>
        </div>
        <div className='h-4/12 w-full flex justify-center items-center flex-wrap '>
            <input className='h-2/12 md:h-4/12 w-6/12 md:w-7/12 bg-gray-300 rounded-xl md:rounded-full mx-5 md:mx-10' type="text" />
            <button className='bg-gray-800 text-white p-3 rounded-2xl w-3/12 md:w-2/12 md:h-auto h-2/12 flex items-center justify-center'>Copy</button>
        </div>
        <div className='h-7/12 md:h-4/12 w-full flex justify-center items-stretch flex-wrap'>
            <div className='h-2/12 w-full md:h-full md:w-4/12 flex py-auto'>
                <label className='h-3/12 md:mx-5 w-4/12 md:w-auto flex justify-center items-center'>Length {length}</label>
                <input id='range' className='h-3/12 md:w-3/12 rounded-full md:mx-3 w-4/12' min={6} max={12} value={length} onChange={(e)=> {setLength(e.target.value)}} type="range" />
            </div>
            <div className='h-2/12 w-full md:h-full md:w-4/12 py-auto'>
                <label className='mx-3' htmlFor="">Character</label>
                <input className='mx-3' type="checkbox" />
            </div>
            <div className='h-2/12 w-full md:h-full md:w-4/12 py-auto'>
                <label htmlFor="">Number</label>
                <input className='mx-3' type="checkbox" />
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App