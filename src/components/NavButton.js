import React, { useContext, useState, useReducer } from 'react';
import { store } from '../Store.js';
import { useSpring, animated } from 'react-spring'
import Store from '../Store';
//import ButtonStateContext from './ButtonState.js';
//import { color, style } from '@mui/system';

const NavButton = (props) => {
    const state = useContext(Store);
    console.log(state);

    const reducer = key => key + 1;
    //const { setButtonState } = useContext(ButtonStateContext);
    //const [id, updateId] = useReducer(reducer, 0);

//    function update() {
        // setButtonState({
        //   name,
        //   id: `${name}-${id}`
        // })
        // updateId();
//    };

    //const [selectedButton, setSelectedButton] = useState(1);

    const {'font-size': fontSize, 'expanded-font-size': expandedFontSize} = props.style;

    const onClick = (buttonId) => {
        setStep({
            fontSizeStart: fontSize,
            fontSizeEnd: fontSize,
        });

        //update();
        state.setSelectedButton(props.buttonId);
    }

    const onMouseEnter = (buttonId) => {
        setStep({
            fontSizeStart: fontSize,
            fontSizeEnd: expandedFontSize,
        });
    }

    const onMouseLeave = (buttonId) => {
        setStep({
            fontSizeStart: expandedFontSize,
            fontSizeEnd: fontSize,
        });
    }

    const [step, setStep] = useState({
        fontSizeStart: fontSize,
        fontSizeEnd: fontSize,
    });

    const spring = useSpring({
        fontSize: step.fontSizeEnd,
        from: step.fontSizeStart,
    });

    const customStyle = props.buttonId === state.selectedButton.item 
        ? { ...props.style, ...props.selectedStyle, ...spring }
        : { ...props.style, ...spring };

    return (
        <animated.button className={props.className} style={customStyle}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}>
            {props.text}
        </animated.button>
    );
}

export default NavButton;