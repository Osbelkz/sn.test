import React from "react";
import {uuid} from "uuidv4";
import Wrapper from "../Wrapper/Wrapper";
import {UsersContainerPropsType} from "./UsersContainer";

type PropsType = UsersContainerPropsType

function Users(props: PropsType) {
    if (!props.users.length) {
        props.setUsers([
            {id: uuid(), followed: true, fullName: 'Os', location: {city: "Petropavl", country: "KZ"}, status: "youu"},
            {id: uuid(), followed: true, fullName: 'Banzai', location: {city: "Osmk", country: "RU"}, status: "ddddddd"},
            {id: uuid(), followed: false, fullName: 'Diko', location: {city: "Astana", country: "KZ"}, status: "sd"},
            {id: uuid(), followed: false, fullName: 'Gera', location: {city: "Moscow", country: "RU"}, status: "sdf"},
        ])
    }

    return (
        <Wrapper>
            <div>
                {props.users.map(user => (
                    <div key={user.id}>
                        <div>img</div>
                        <div>
                            {user.followed
                                ? <button onClick={() => props.unfollow(user.id)}>{"unfollow"}</button>
                                : <button onClick={() => props.follow(user.id)}>{"follow"}</button>}
                        </div>
                        <div>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </div>

                    </div>
                ))}
            </div>
        </Wrapper>

    )
}

export default Users
