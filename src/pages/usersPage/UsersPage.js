import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersFunction} from "../../redux/action";
import UsersCard from "../../components/UsersCard";
import style from "./usersPage.module.css"
const UsersPage = () => {
    const dispatch = useDispatch ()
    const users = useSelector (state => state.usersPageReducer.users)
    console.log(users)
    const getUsers = () => {
        dispatch (fetchUsersFunction())
    }
    return(
        <div>
            <button onClick={getUsers}>get users</button>
            <div className={style.usersContainer}>
                {users.map (user => <UsersCard userINfo={user}/>)}
            </div>
        </div>

    )
}

export default UsersPage;