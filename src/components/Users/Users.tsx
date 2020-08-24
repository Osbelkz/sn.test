import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import {UsersContainerPropsType} from "./UsersContainer";
import axios from "axios"
import {UserType} from "../../redux/reducers/users-reducer";
import userDefaultPhoto from "./../../assets/userDefaultPhoto.png"

type PropsType = UsersContainerPropsType

function Users(props: PropsType) {

    if (!props.users.length) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response=>{
                let users: Array<UserType> = response.data.items
                props.setUsers(response.data.items)
            })
    }

    return (
        <Wrapper>
            <div>
                {props.users.map(user => (
                    <div key={user.id}>
                        <div>
                            <img src={user.photos.small !== null ? user.photos.small : userDefaultPhoto} alt=""/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => props.unfollow(user.id)}>{"unfollow"}</button>
                                : <button onClick={() => props.follow(user.id)}>{"follow"}</button>}
                        </div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>

                    </div>
                ))}
            </div>
        </Wrapper>

    )
}

export default Users
