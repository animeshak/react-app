import React, { useState } from 'react'

export default function Addition() {

    const [num1, setNum1] = useState(1)
    const [num2, setNum2] = useState(2)

    function getAddition(){
        alert(num1)
    }

    return (
    <>
    <input type="text" onChange={ (e) => { setNum1(e.target.value) } } /><br/>
    <input type="text" onChange={ (e) => { setNum2(e.target.value) } } /><br/>

    <input type="button" value="Add" onClick={getAddition}/>
    
    <h1>
        {num1} + {num2} = {num1 + num2}
    </h1>

    <h1>
        {num1} * {num2} = {num1 * num2}
    </h1>
    </>
  )
}
