import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Counter from './components/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className='bg-green-300 text-black rounded-xl p-4 mb-4' >Tailwind Test</h1>
    <Card title="Anubhav" nameText="Hello World"  />
    <br/>
    <Card title="React" nameText="Important"/> */}
    <Counter/>
    </>
  )
}

export default App
