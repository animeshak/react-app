import React, { useState } from 'react'

export default function Square() {
  
    const[num1, setNum1] = useState(1)
    function getSqr(){
         alert(num1*num1);
    }

    return (
    <>
    <input type = "text" onChange={(e)=>{setNum1(e.target.value)}}/>
    <input type="button" value = "square" onClick={getSqr}/>
    <h1>Square of {num1} is {num1*num1}</h1>   
    </>
  )
}
