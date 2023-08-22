import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

export default function Basic1() {
const [num1, setNum1] = useState(1);
const [num2, setNum2] = useState(2);
    return (
    <>Basic1<br/>
    Enter Number1 : <input type="text" /><br/>
    Enter Number2 : <input type="text" /><br/>
    <input type="button" value="Addition"/><br/>
    <Outlet/>
    </>
  )
}