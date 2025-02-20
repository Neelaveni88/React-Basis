import React from 'react'
import ToggleTheme from './ToggleTheme'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WithAuthonication from './Components/WithAuthonication'
import Profile from './Components/Profile'
// import SimpleCode from './Components/SimpleCode'
import AnniversaryCard from './Components/AnniversaryCard'
import UseRefForm from './Components/UseRef/UseRefForm'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (

    <>
      <ToggleTheme/>
     
     
    <h1>Higher Order Components</h1>
      {/* <SimpleCode/> */}
     <AnniversaryCard/>
     <WithAuthonication/>
     <Profile/>
     <UseRefForm/>

    </>
  )
}

export default App
