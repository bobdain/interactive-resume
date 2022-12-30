import { Row } from 'reactstrap';
import NavButton from './NavButton';
import { useContext } from 'react';
import Store from '../Store';

const leftButtonWidths = ['300px', '140px', '160px', '190px', '230px'];
const centerButtonWidths = ['300px', '220px', '260px', '320px', '380px'];
const rightButtonWidths = ['300px', '200px', '230px', '290px', '350px'];
const leftTopMargins = ['20px', '25px', '30px', '40px', '50px'];
const rightTopMargins = ['20px', '33px', '35px', '40px', '50px'];
const fontSizes = ['14pt', '17pt', '20pt', '25pt', '30pt'];
const expandedFontSizes = ['16.8pt', '20.4pt', '24pt', '30pt', '36pt'];

const createStylesByWidth = (width, state) => {
    const index = getIndexByWidth(width);
    const selectedButton = state.selectedButton.item;

    return ([{
        'width': leftButtonWidths[index],
        'margin-top': leftTopMargins[index],
        'font-size': selectedButton === 0 ? fontSizes[index] : fontSizes[index],
        'expanded-font-size': expandedFontSizes[index]
    }, {
        'width': centerButtonWidths[index],
        'margin-top': 0,
        'font-size': selectedButton === 1 ? fontSizes[index] : fontSizes[index],
        'expanded-font-size': expandedFontSizes[index]
    }, {
        'width': rightButtonWidths[index],
        'margin-top': rightTopMargins[index],
        'font-size': selectedButton === 2 ? fontSizes[index] : fontSizes[index],
        'expanded-font-size': expandedFontSizes[index]
    }]);
}

const getIndexByWidth = (width) => {
    if (width >= 1200) return 4;
    if (width >= 992) return 3;
    if (width >= 768) return 2;
    if (width >= 576) return 1;
    return 0;
}

const createSelectedStyleByWidth = (width) => {
    const index = getIndexByWidth(width);

    return ({
        'text-shadow': '0 0 30px #77d',
        'text-decoration': 'underline'
    });
}

const xsStyle = {
    'width': '300px',
    'font-size': '14pt',
    'margin-top': '10px',
}

const Navbar = (props) => {
    const state = useContext(Store);
    const styles = createStylesByWidth(props.windowWidth, state);
    const selectedStyle = createSelectedStyleByWidth(props.windowWidth);

    // Extra small
    if (props.windowWidth < 576) {
        return (
            <>
                <Row className='text-center' style={{}}>
                    <NavButton
                        text='Who I Am'
                        buttonId='0'
                        className='nav-button'
                        style={xsStyle}
                        selectedStyle={selectedStyle} />
                </Row>
                <Row>
                    <NavButton
                        text='Where I&rsquo;ve Been'
                        buttonId='1'
                        className='nav-button'
                        style={xsStyle}
                        selectedStyle={selectedStyle} />
                </Row>
                <Row>
                    <NavButton
                        text='What I Can Do'
                        buttonId='2'
                        className='nav-button'
                        style={xsStyle}
                        selectedStyle={selectedStyle} />
                </Row>
            </>
        );
    }

    return (
        <div className='navbar'>
            <NavButton
                text='Who I Am'
                buttonId={0}
                className='nav-button rotate-ccw-10'
                style={styles[0]}
                selectedStyle={selectedStyle} />
            <NavButton
                text='Where I&rsquo;ve Been'
                buttonId={1}
                className='nav-button'
                style={styles[1]}
                selectedStyle={selectedStyle} />
            <NavButton
                text='What I Can Do'
                buttonId={2}
                className='nav-button rotate-cw-10'
                style={styles[2]}
                selectedStyle={selectedStyle} />
        </div>
    )
}

export default Navbar;