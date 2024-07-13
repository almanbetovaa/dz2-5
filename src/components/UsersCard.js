import React from "react";
import style from "./userCard.module.css"
const UsersCard =({userINfo}) => {

    const сardClick = async () => {

            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userINfo.id}`)
            const data = await response.json()
            console.log(data)

    }

    return (
        <div className={style.userCard}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClDjLZzrjD5FHPX-nNU5QoTWK-C2XcOD-M6Aabozw6Oem8-0ejje8Lk5DmNbhVOvvMfc&usqp=CAU"
                 alt="avatar"
            style={{
                height: '100px'
            }}/>
            <div className={style.usersDetails}>
                <h1>{userINfo.name}</h1>
                <p>Username: {userINfo.username}</p>
                <p>Email: {userINfo.email}</p>
            </div>
        </div>
    )

}

export default UsersCard;