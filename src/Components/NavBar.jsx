import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>TamTree India Pvt Ltd</div>
        <ul>
            <Link to="/">
            <li>Homes</li>
            </Link>
            <Link to="/About">
            <li>About</li>
            </Link>
            <Link to="/Contact">
            <li>Contact</li>
            </Link>
        </ul>
        <button>Login</button>
    </div>
  )
}

export default NavBar 