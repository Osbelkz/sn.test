import React from 'react';
import { action } from '@storybook/addon-actions';
import Message from "./Message";
import {uuid} from "uuidv4";

export default {
    title: 'Message',
    component: Message ,
};

export const MessageTest = () => <Message message={{id: uuid(), message:"efgfdg"}} />;
