import React, { useContext, useState } from 'react';
import { store } from '../store.js';
import { useSpring, animated } from 'react-spring'

const MyNavButton = (props) => {
    const style = {
        fontSize: '100%',
        transition: 'font-size 0.2s'
    }

    const onClick = (buttonId) => {
        console.log(`Button clciked: ${props.buttonId}`);
        setStep({
            fontSizeStart: '100%',
            fontSizeEnd: '100%',
        });
    }

    const onMouseEnter = (buttonId) => {
        console.log(`Mouse enter: ${props.buttonId}`);
        setStep({
            fontSizeStart: '100%',
            fontSizeEnd: '120%',
        });
    }

    const onMouseLeave = (buttonId) => {
        console.log(`Mouse leave: ${props.buttonId}`);
        setStep({
            fontSizeStart: '120%',
            fontSizeEnd: '100%',
        });
    }

    const [step, setStep] = useState({
        fontSizeStart: '100%',
        fontSizeEnd: '100%',
    });

    const spring = useSpring({
        fontSize: step.fontSizeEnd,
        from: step.fontSizeStart
    });

    return (
        <animated.button className={props.className} style={spring}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}>
            {props.text}
        </animated.button>
    );
}

export default MyNavButton;