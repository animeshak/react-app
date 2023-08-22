import React from 'react'

export default function Sqr(props) {
  var num = props.x;
  var name = props.user.naam;
  var age = props.user.age;
  var city = props.user.city;
  var sqr = num * num;

    return (
        <>
    <div>
    name: {name}, How is the weather in {city}
    <div>
    Square of {num} is {sqr}
    </div>
    </div>
    </>
  )
}
