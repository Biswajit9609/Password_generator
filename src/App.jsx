import React from 'react'
import { useState } from 'react'
import './App.css'
function App() {
  return (
    <>
      <div className="h-screen w-full bg-gray-950 text-white p-5 md:px-20 lg:px-32">
        <div className="heading text-4xl font-bold mb-10">Random Password Generator</div>
        <div className="password bg-blue-600 rounded-2xl mb-10">
          <input className='h-12 w-full overflow-hidden rounded-2xl px-10' type="text" />
        </div>
        <div className="control1 mb-10 flex flex-wrap">
          <div className='w-6/12'>
            <input id='length' type="range" value="" />
            <br /> 
            <label htmlFor="length">Length</label>
          </div>
          <div className='w-6/12'>
          <button className='h-10 w-6/12 bg-indigo-600 rounded-2xl hover:bg-indigo-700'>Copy</button>
          </div>
          
        </div>
        <div className="control2 text-2xl mb-10">
          <input className='scale-150' type="checkbox" name="Allow Capital Letters" id="cap" />
          <label htmlFor="cap"> Allow Capital Letters</label>
          <br />
          <input className='scale-150' type="checkbox" name="Allow Numbers" id="num" />
          <label htmlFor="num"> Allow Numbers</label>
          <br />
          <input className='scale-150' type="checkbox" name="" id="char" />
          <label htmlFor="char"> Allow Characters</label>
          <br />
        </div>
        <div className="generate flex justify-center">
          <button className='h-15 w-10/12 bg-purple-600 rounded-full'>Generate</button>
        </div>
      </div>
    </>
  )
}

export default App