import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCode from './Components/SimpleCode'
import AnniversaryCard from './Components/AnniversaryCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleCode/>
     <AnniversaryCard/>

    </>
  )
}

export default App
