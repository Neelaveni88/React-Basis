import React from 'react'

const NotFound = () => {
  return (
    <div style={{marginTop:"20%"}}>
        <h1 style={{color:"red",textAlign:"center"}}>404</h1>
        <h2 style={{fontWeight:"600",textAlign:"center"}}>Page Not Found</h2>
        <p style={{textAlign:"center"}}>Oops!The Page you are looking for does not exist.It might have been moved or delete</p>
        <button style={{marginLeft:"45%",borderRadius:"15px"}}>Back to Home</button>
    </div>
  )
}

export default NotFound