import React from 'react'

const isAuthenticated=true;

function WithAuthonication(Component) {
  return function(){
    if(!isAuthenticated){
        return<div>User Not Authenticated</div>
    }
    return<Component/>;
  } ;
   
  
};

export default WithAuthonication