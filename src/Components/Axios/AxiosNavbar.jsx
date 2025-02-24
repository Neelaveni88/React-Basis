import React from 'react'
import { Link } from 'react-router-dom';

const AxiosNavbar = () => {
  return (
    <div style={{padding:"2px",backgroundColor:"GrayText"}} className='navbar'>
        <div  style={{color:"white"}}className='logo'>TamTree</div>
    <ul>
      <li><Link style={{textDecoration:"none",color:"white"}} to="/">Axios Home</Link></li>
      <li><Link style={{textDecoration:"none",color:"white"}} to="/Axios About">Axios About</Link></li>
    </ul>
  </div>
);
};

export default AxiosNavbar