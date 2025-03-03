import {useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(5);
  const [numAllow,setnumAllow]=useState(false);
  const [spChar,setspChar]=useState(false);
  const [password,setPassword]=useState("");
  const passGenRef=useRef(null)

  const passGen = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (spChar) str += "~!@#$%^&*()-_=+[{]}|"

    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllow,spChar,setPassword])

  const copypasswordToclipboard=useCallback(()=>{
    passGenRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passGen()
  },[length,numAllow,spChar,passGen])

  return (
    <>
      <div className='text-black bg-pink-200 w-full max-w-md my-8 mx-auto shadow-md py-3 rounded-lg px-4 '>
        <h1 className='text-center text-black py-1 mb-5'>PassWord Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden '>
          <input type="text" value={password} readOnly className='w-full  py-1 px-3 outline-none bg-white text-black rounded-b-sm'ref={passGenRef} placeholder='password'/>
          <button className='bg-blue-800 text-white px-3  shrink-0 outline-none hover:cursor-pointer' onClick={copypasswordToclipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-3 mt-5'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllow} id="numberInput" onChange={()=>{setnumAllow((prev)=>!prev)}} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={spChar} id="charInput" onChange={()=>{setspChar((prev)=>!prev)}} />
            <label htmlFor="numberInput"> Sp. Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
