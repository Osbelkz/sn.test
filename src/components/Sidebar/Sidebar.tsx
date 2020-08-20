import React from "react";
import classes from "./Sidebar.module.scss"
import {SidebarType} from "../../redux/sidebar-reducer";

type PropsType = {
    sidebar: SidebarType
}

const Sidebar = (props: PropsType) => {

    let friends_bar = props.sidebar.friends.map(name => (
        <div key={name.id} className={classes.profile}>
            <div style={{
                background: `url(${name.img}) 0 0/cover no-repeat`,
                width: "50px",
                height: "50px",
                borderRadius: '50%',
                border: 'lavender 2px solid'
            }}/>
            {/*            <div className={classes.profile__photo}>
                <img src={name.img} alt=""/>
            </div>*/}
            <div className={classes.profile__name}>{name.name}</div>
        </div>)
    )

    return (
        <div className={classes.sidebar}>
                    {friends_bar}
                </div>
    );
};

export default Sidebar;
