import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCode from './Components/SimpleCode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleCode/>
<h1>App</h1>
<p>subHeading</p>
    </>
  )
}

export default App
