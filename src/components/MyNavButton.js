import React, { useContext } from 'react';
import { store } from '../store.js';

const MyNavButton = (props) => {
    const style = { 
        fontSize: '100%', 
        transition: 'font-size 0.2s'}

    return (
        <button className={props.className} style={style} 
            onMouseEnter={({ target }) => target.style.fontSize = "120%"}
            onMouseLeave={({ target }) => target.style.fontSize = "100%"} 
            onClick={({ target }) => {
                console.log(`Pressed button #${props.buttonId}`)
            }}>
                {props.text}
            </button>
    )
}

export default MyNavButton;