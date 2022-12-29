import React, { useContext, useState, useReducer } from 'react';
import { store } from '../store.js';
import { useSpring, animated } from 'react-spring'
import ButtonStateContext from './ButtonState.js';
import { color, style } from '@mui/system';

const NavButton = (props) => {

    const reducer = key => key + 1;
    const { setButtonState } = useContext(ButtonStateContext);
    const [id, updateId] = useReducer(reducer, 0);

//    function update() {
        // setButtonState({
        //   name,
        //   id: `${name}-${id}`
        // })
        // updateId();
//    };

    const {'font-size': fontSize, 'expanded-font-size': expandedFontSize} = props.style;
    // console.log('MY DATA:', fontSize, ' ', expandedFontSize);

    const onClick = (buttonId) => {
        setStep({
            fontSizeStart: fontSize,
            fontSizeEnd: fontSize,
        });

        //update();
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

    const customStyle = { ...props.style, ...props.selectedStyle, ...spring };

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