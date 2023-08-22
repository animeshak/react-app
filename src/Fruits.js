import React from 'react'

export default function Fruits() {
  var fruits = ["orange","pineapple","apple"]
    return (
    <div>
        <ul>
            {/* {JSON.stringify(fruits)}             */}
        {
            fruits.map((fruits,index)=>{
                return<li key={index}>{fruits}</li>
            })
        }
        </ul>
    </div>
  )
}
