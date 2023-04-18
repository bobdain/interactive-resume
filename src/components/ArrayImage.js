import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Col, Card, CardImg, CardHeader, CardBody, CardImgOverlay, CardTitle } from 'reactstrap';
import ButtonStateContext from './ButtonState.js';

const ArrayImage = (props) => {
    const image = props.image.image;
    const imageClass = props.image.class;
    const alt = props.image.alt;

    //const buttonState = useContext(ButtonStateContext);
    const finalOpacity = 1; //buttonState === 1 ? { opacity: 1 } : { opacity: 0 };
    const opacitySpring = useSpring({ from: { opacity: 0 }, to: 1 });

    const [isHover, setIsHover] = useState(false);

    const onClick = props.onClick;

    //const onClick = () => {
        //state.setSelectedButton(props.buttonId);
    //}

    const onMouseEnter = () => {
        setIsHover(true);
    }

    const onMouseLeave = () => {
        setIsHover(false);
    }

    const tooltipClass = imageClass + ' tooltip-style';

    return (
        <>
            <animated.img src={image}
                className={imageClass}
                alt={alt}
                style={opacitySpring}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick} />
           
            {isHover &&
                <div className={tooltipClass}>
                    {props.image.tooltip}
                </div>
            }
        </>
    )
}

export default ArrayImage;