import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import userDefaultPhoto from "../../assets/userDefaultPhoto.png";
import axios from "axios";
import {UsersContainerPropsType} from "./UsersContainer";
import classes from "./Users.module.scss";


type PropsType = UsersContainerPropsType

class Users extends React.Component<PropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCountOfUsers(response.data.totalCount)
            })
    }

    onPageNumberChange(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <Wrapper>
            <div className={classes.usersPage}>
                <div className={classes.pageButton}>
                    {pages.map(p => {
                        return <div onClick={() => this.onPageNumberChange(p)}
                                     className={this.props.currentPage === p ? classes.currentPage : classes.page}>
                            {p}
                        </div>
                    })}
                </div>
                <div>
                    {this.props.users.map(user => (
                        <div className={classes.userCard} key={user.id}>
                            <div className={classes.userCard__authorPhoto}>
                                <img src={user.photos.small !== null ? user.photos.small : userDefaultPhoto} alt=""/>
                                <div>
                                    {user.followed
                                        ? <button className={classes.followBtn} onClick={() => this.props.unfollow(user.id)}>{"unfollow"}</button>
                                        : <button className={classes.followBtn} onClick={() => this.props.follow(user.id)}>{"follow"}</button>}
                                </div>
                            </div>
                            <div className={classes.userCard__body}>

                                <div className={classes.userCard__body_header}>{user.name}</div>
                                <div className={classes.userCard__body_text}>{user.status}</div>

                            </div>
                        </div>
                    ))}
                    <div className={classes.post}>




                    </div>
                </div>
            </div>
        </Wrapper>
    }
}

export default Users
