import './chat.css'
import Aside from './chatAside.jsx'
import Section from './chatSect.jsx';
import React from 'react';


export default function Chat(){

    return(
        <div className="chat">
            <Aside/>
            <Section/>
        </div>
    )
}