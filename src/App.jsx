import React from 'react'
import ToggleTheme from './ToggleTheme'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import WithAuthonication from './Components/WithAuthonication'
// import Profile from './Components/Profile'
// // import SimpleCode from './Components/SimpleCode'
// import AnniversaryCard from './Components/AnniversaryCard'
// import UseRefForm from './Components/UseRef/UseRefForm'
import "bootstrap/dist/css/bootstrap.min.css";
import { FormProvider } from './Components/Pages/Revision/FormContext'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Revision/Home'
import About from './Components/Pages/Revision/About'
import NavBar from './Components/Pages/Revision/NavBar'


// import NavBar from './Components/NavBar'
// import Homes from "./Components/Pages/Homes"
// import About from "./Components/Pages/About"
// import Contact from "./Components/Pages/Contact"
// import NotFound from './Components/Pages/NotFound'
// import { Routes,Route } from 'react-router-dom'


function App() {
  return (

    <>


<FormProvider>
 <NavBar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
 </Routes>
</FormProvider>
      {/* <ToggleTheme/> */}
     
     {/* <NavBar/>
     <Routes>
      <Route path='/' element={<Homes/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path="*" element={<NotFound />} />
     </Routes> */}
     
    
      {/* <SimpleCode/> */}
     {/* <AnniversaryCard/>
     <WithAuthonication/>
     <Profile/>
     <UseRefForm/> */}

    </>
  )
}

export default App
