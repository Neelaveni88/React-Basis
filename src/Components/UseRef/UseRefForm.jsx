import { Button } from '@mui/material';
import React, { useRef } from 'react'

const UseRefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
  
    const handleNext = (currentRef) => {
      if (currentRef === nameRef) {
        emailRef.current.focus();
      } else if (currentRef === emailRef) {
        passwordRef.current.focus();
      }
    };
  
    return (
      <div style={{width:"30%"  ,marginLeft:"30%",border:"2px solid red",borderRadius:"15px",backgroundColor:"lightgray"}}>
        <h2 style={{color:"blue"}}>User Input Form</h2>
        <div className="mb-4">
          <label style={{marginRight:"30px",marginLeft:"10px"}}>Name:</label>
          <input style={{marginRight:"30px"}} ref={nameRef} type="text"className="w-full p-2 border rounded"placeholder="Enter your name"/>
          <Button variant="contained" onClick={() => handleNext(nameRef)}>Next</Button>
        </div>
        <div className="mb-4">
          <label style={{marginRight:"30px",marginLeft:"10px"}}>Email:</label>
          <input style={{marginRight:"30px"}} ref={emailRef}type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
          <Button variant="contained" onClick={() => handleNext(emailRef)}>Next</Button>
        </div>
        <div className="mb-4">
          <label style={{marginRight:"10px",marginLeft:"10px"}}>Password:</label>
          <input ref={passwordRef}type="password"className="w-full p-2 border rounded"placeholder="Enter your password"/>
        </div>
      </div>
    );
  };

export default UseRefForm