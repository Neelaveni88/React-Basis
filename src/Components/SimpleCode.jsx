import React, { useState } from 'react'

const SimpleCode = ()  =>{
    const [count, setCount] = useState();
  return (
    <>
    <p>Count:{count}</p>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default SimpleCode