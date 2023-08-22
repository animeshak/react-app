import React, { useEffect, useState } from 'react'

export default function People() {
    // var pop = [{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}]


    const [pop, setPop] = useState([]);

    const getUsers = () => {
        var url = "https://reqres.in/api/users?page=2";

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.table(data.data)
            setPop(data.data)
        })

    }

    useEffect(() => {
        getUsers();
    }, [])

  return (
    <div>
        <table border="1">
            <thead>
                <th>Email</th>
                <th>name</th>
                <th>Avatar</th>
            </thead>
            {
                pop.map((user)=> {
                    return<tr>
                            <td>{user.email}</td>
                            <td>{user.first_name}</td>
                            <td><img src={user.avatar}/></td>

                        </tr>
                })
}
        </table>
    </div>
  )
}