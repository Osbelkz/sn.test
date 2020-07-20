import React from "react";
import classes from './Settings.module.scss'
import Wrapper from "../Wrapper/Wrapper";

function Settings() {
    return (
        <Wrapper>
            <div className={classes.settings}>
                Settings
                <div className={classes.block}>
                    <div className={classes.block__row}>
                        <div className={classes.block__element}></div>
                        <div className={classes.block__content}></div>
                    </div>
                </div>
            </div>
        </Wrapper>

    );
}

export default Settings;
