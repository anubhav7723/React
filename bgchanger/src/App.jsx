import { useState } from "react"

function App() {
  const [color, setcolor] = useState("black")
  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 bg-white h-14 rounded-xl left-80">
          <div className="flex flex-wrap  justify-center gap-3 shadow-xl px-2 py-1 h-12 ">
            <button onClick={()=>setcolor("red")} className="outline-none px-6 py-3 rounded-2xl shadow-sm text-white hover:cursor-pointer"
            style={{ backgroundColor: 'red' }}>Red</button>
            <button onClick={()=>setcolor("blue")} className="outline-none px-6 py-3 rounded-2xl shadow-sm text-white hover:cursor-pointer"
            style={{ backgroundColor: 'blue' }}>Blue</button>
            <button onClick={()=>setcolor("green")} className="outline-none px-6 py-3 rounded-2xl shadow-sm text-white hover:cursor-pointer"
            style={{ backgroundColor: 'green' }}>Green</button>
            <button onClick={()=>setcolor("black")} className="outline-none px-6 py-3 rounded-2xl shadow-sm text-white hover:cursor-pointer"
            style={{ backgroundColor: 'black' }}>Black</button>
            <button onClick={()=>setcolor("yellow")} className="outline-none px-6 py-3 rounded-2xl shadow-sm text-black hover:cursor-pointer"
            style={{ backgroundColor: 'yellow' }}>Yellow</button>
            <button onClick={()=>setcolor("pink")} className="outline-none px-6 py-3 rounded-2xl shadow-sm text-black hover:cursor-pointer"
            style={{ backgroundColor: 'pink' }}>Pink</button>
            <button onClick={()=>setcolor("grey")} className="outline-none px-6 py-3 rounded-2xl shadow-sm text-black hover:cursor-pointer"
            style={{ backgroundColor: 'grey' }}>Grey</button>
            <button onClick={()=>setcolor("olive")} className="outline-none px-6 py-3 rounded-2xl shadow-sm text-white hover:cursor-pointer"
            style={{ backgroundColor: 'olive' }}>Olive</button>
            <button onClick={()=>setcolor("brown")} className="outline-none px-6 py-3 rounded-2xl shadow-sm text-white hover:cursor-pointer"
            style={{ backgroundColor: 'brown' }}>Brown</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
