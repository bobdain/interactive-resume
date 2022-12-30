import React, { useContext, useState, useReducer } from 'react';
import { useSpring, animated } from 'react-spring'
import Store from '../Store';

// NOTE:
// The button that has just lost the selected state needs to do the spring animation. 
// That will probably fix the broken spring behavior.


const NavButton = (props) => {
    const state = useContext(Store);
    const {'font-size': fontSize, 'expanded-font-size': expandedFontSize} = props.style;
    const selectedButton = state.selectedButton.item;

    const onClick = () => {
        setStep({
            fontSizeStart: expandedFontSize,
            fontSizeEnd: fontSize,
        });

        state.setSelectedButton(props.buttonId);
    }

    const onMouseEnter = () => {
        setStep({
            fontSizeStart: fontSize,
            fontSizeEnd: expandedFontSize,
        });
    }

    const onMouseLeave = () => {
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

    const customStyle = props.buttonId === selectedButton 
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