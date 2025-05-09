import React from 'react'
import { useState,useCallback,useEffect } from 'react'
import './App.css'
function App() {
  const [length,setLength] = useState(8)
  const [allowNumbers,setAllowNumbers] = useState(false)
  const [allowSymbols,setAllowSymbols] = useState(false)
  const [copied,setCopied] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(allowNumbers) str += "0123456789"
    if(allowSymbols) str += "!@$&*#"

    for(let i = 0;i<length;i++){
      let charIndex = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)
  },[length,allowNumbers,allowSymbols])

  useEffect(()=>{
    passwordGenerator()
  },[length,allowNumbers,allowSymbols,passwordGenerator]

)
const copyToClipboard = () =>{
  navigator.clipboard.writeText(password)
  setCopied(true)
  setTimeout(() => {
    setCopied(false)
  }, 2000);
}
  return (
    <>
      <div className="h-screen w-full bg-gray-950 text-white p-5 md:px-20 lg:px-32 flex justify-center items-center">
        <div className="max-w-2xl">
<div className="heading text-4xl font-bold mb-10">Random Password Generator</div>
        <div className="password bg-blue-600 rounded-2xl mb-10">
          <input className='h-12 w-full overflow-hidden rounded-2xl px-10 text-black font-bold' type="text" value={password} readOnly />
        </div>
        <div className="control1 mb-10 flex flex-wrap">
          <div className='w-6/12'>
            <input className='cursor-pointer' id='length' type="range" value={length} min={6} max={30} onChange={(e)=> {setLength(e.target.value)}}/>
            <br /> 
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='w-6/12'>
          <button className='h-10 w-6/12 bg-indigo-600 rounded-2xl hover:bg-indigo-700' onClick={copyToClipboard}>Copy</button>
          {copied && <span className='text-green-400 text-sm'> Copied ! </span>}
          </div>
          
        </div>
        <div className="control2 text-2xl mb-10">
          <input className='scale-150' type="checkbox" name="Allow Numbers" id="num" onChange={()=>setAllowNumbers(prev=>!prev)} />
          <label htmlFor="num"> Allow Numbers</label>
          <br />
          <input className='scale-150' type="checkbox" name="" id="char" onChange={()=>{setAllowSymbols(prev=>!prev)}} />
          <label htmlFor="char"> Allow Characters</label>
          <br />
        </div>
        <div className="generate justify-center">
          <button className='h-15 w-10/12 bg-purple-600 rounded-full' onClick={passwordGenerator}>Generate</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App