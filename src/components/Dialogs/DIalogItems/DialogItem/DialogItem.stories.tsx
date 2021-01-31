import React from 'react';
import {uuid} from "uuidv4";
import DialogItem from "./DialogItem";
import {BrowserRouter} from "react-router-dom";

export default {
    title: 'DialogItem ',
    component: DialogItem,
};

export const DialogItemDefault = () => (
    <BrowserRouter>
        <DialogItem id={uuid()} name={'General Shepard'}/>
    </BrowserRouter>);
