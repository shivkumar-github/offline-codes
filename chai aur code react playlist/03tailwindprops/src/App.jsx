import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  age: 21,
  username:"shivkumar"
}
  return (
    <>
      <h1 className='bg-green-300 text-black rounded-xl'>tailwind test</h1>
      <Card username="shivkumar" descText="bored shivkumar1"></Card>
      <Card username="shivkumar2" descText="bored shivkumar2"></Card>
    </>
  )
}

export default App
