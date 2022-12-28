import React, { useContext, useState, useReducer } from 'react';
import { store } from '../store.js';
import { useSpring, animated } from 'react-spring'
import ButtonStateContext from './ButtonState.js';

const MyNavButton = (props) => {

    const reducer = key => key + 1;
    const { setButtonState } = useContext(ButtonStateContext);
    const [id, updateId] = useReducer(reducer, 0);

    function update() {
        // setButtonState({
        //   name,
        //   id: `${name}-${id}`
        // })
        // updateId();
      };

    const style = {
        fontSize: '100%',
        transition: 'font-size 0.2s'
    }

    const onClick = (buttonId) => {
        setStep({
            fontSizeStart: '100%',
            fontSizeEnd: '100%',
        });

        update();
    }

    const onMouseEnter = (buttonId) => {
        setStep({
            fontSizeStart: '100%',
            fontSizeEnd: '120%',
        });
    }

    const onMouseLeave = (buttonId) => {
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