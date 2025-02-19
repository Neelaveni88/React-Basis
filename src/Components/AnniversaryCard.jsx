import React from 'react'
import WithAuthonication from './WithAuthonication';

function AnniversaryCard() {
  return (
    <div>
      
        <h1>Happy Anniversary!</h1>
        <p>
          Wishing you both a lifetime of love, happiness, and endless beautiful memories. 
          Cheers to another amazing year together!
        </p>
        <button style={{backgroundColor:"pink",padding:"10px",fontSize:"15px",color:"brown"}}>
          Wish you Happy Anniversary
        </button>
   
    </div>
      );
    }

export default WithAuthonication(AnniversaryCard)