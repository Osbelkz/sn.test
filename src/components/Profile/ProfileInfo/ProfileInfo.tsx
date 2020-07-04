import React from "react";
import classes from './ProfileInfo.module.scss'


const ProfileInfo = () => {
    return (
        <div className={classes.profile_info}>
            <div className={classes.profile_info__img}></div>
            <div>photo + description</div>
        </div>
    )
}


export default ProfileInfo;
