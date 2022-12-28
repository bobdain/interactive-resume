import React, { useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import ButtonStateContext from './ButtonState.js';

const ArrayImage = (props) => {
    const image = props.image.img;
    const imageClass = props.image.class;
    const alt = props.image.alt;

    //const buttonState = useContext(ButtonStateContext);
    const finalOpacity = 1; //buttonState === 1 ? { opacity: 1 } : { opacity: 0 };

    const opacitySpring = useSpring({ from: { opacity: 0 }, to: 1 });

    return (
        <animated.img src={image} className={imageClass} alt={alt} style={opacitySpring} />
    )
}

export default ArrayImage;