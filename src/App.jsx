import React from 'react'
// import ToggleTheme from './ToggleTheme'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import WithAuthonication from './Components/WithAuthonication'
// import Profile from './Components/Profile'
// import SimpleCode from './Components/SimpleCode'
// import AnniversaryCard from './Components/AnniversaryCard'
// import UseRefForm from './Components/UseRef/UseRefForm'
import "bootstrap/dist/css/bootstrap.min.css";
import { FormProvider } from './Components/Revision/FormContext';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Revision/Home';
import About from './Components/Revision/About';
import NavBar from './Components/Revision/Navbar';


function App() {
  return (

    <>
      {/* <ToggleTheme/> */}
     <FormProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
     </FormProvider>

     

      {/* <SimpleCode/> */}
     {/* <AnniversaryCard/>
     <WithAuthonication/>
     <Profile/>
     <UseRefForm/> */}



    </>
  )
}

export default App
