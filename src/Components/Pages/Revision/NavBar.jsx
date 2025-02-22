import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",textDecoration:"none",alignItems:"center",borderBottom:"2px solid grey",padding:"10px"}}>
    <div className='logo'>TamTree India Pvt Ltd</div>
    <ul>
    <Link style={{textDecoration:"none",marginRight:"15px",color:"black"}} to="/">Home</Link>
    <Link style={{textDecoration:"none",marginRight:"15px",color:"black"}} to="/About">About</Link>
    </ul>
    </div>
  );
};

export default NavBar