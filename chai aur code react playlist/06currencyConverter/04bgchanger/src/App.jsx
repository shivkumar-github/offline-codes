import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded'>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600'>red</button> {/* passing it as arrow function as onclick is expecting a function to execute and if we directly pass setColor("red") then the setColor will return some value to onClick rather than returning a function. */}
            <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-700'>green</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700'>blue</button>
            <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-300'>pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
