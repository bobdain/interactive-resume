import { Col, Row } from 'reactstrap';
import NavButton from './NavButton';
import { useWindowWidth } from '@react-hook/window-size'

const leftButtonWidths = ['300px', '140px', '160px', '190px', '230px'];
const centerButtonWidths = ['300px', '220px', '260px', '320px', '380px'];
const rightButtonWidths = ['300px', '200px', '230px', '290px', '350px'];
const leftTopMargins = ['20px', '25px', '30px', '40px', '50px'];
const rightTopMargins = ['20px', '33px', '35px', '40px', '50px'];
const fontSizes = ['14pt', '17pt', '20pt', '25pt', '30pt'];
const expandedFontSizes = ['16.8pt', '20.4pt', '24pt', '30pt', '36pt'];

const createStyles = (index) => {
    return ([{
        'width': leftButtonWidths[index],
        'margin-top': leftTopMargins[index],
        'font-size': fontSizes[index],
        'expanded-font-size': expandedFontSizes[index]
    }, {
        'width': centerButtonWidths[index],
        'margin-top': 0,
        'font-size': fontSizes[index],
        'expanded-font-size': expandedFontSizes[index]
    }, {
        'width': rightButtonWidths[index],
        'margin-top': rightTopMargins[index],
        'font-size': fontSizes[index],
        'expanded-font-size': expandedFontSizes[index]
    }]);
}

const createStylesByWidth = (width) => {
    if (width >= 1200) return createStyles(4);
    if (width >= 992) return createStyles(3);
    if (width >= 768) return createStyles(2);
    if (width >= 576) return createStyles(1);

    return createStyles(0);
}

const xsStyle = {
    'width': '300px',
    'font-size': '14pt',
    'margin-top': '10px',
    'background-color': 'red'
}

const Navbar = (props) => {
    const styles = createStylesByWidth(props.windowWidth);

    // Extra small
    if (props.windowWidth < 576) {
        return (
            <>
                <Row className='text-center' style={{'background-color': 'red'}}>
                    <NavButton text='Who I Am' buttonId='0' className='nav-button' style={xsStyle} />
                </Row>
                <Row>
                    <NavButton text='Where I&rsquo;ve Been' buttonId='1' className='nav-button left-button-xl' style={xsStyle} />
                </Row>
                <Row>
                    <NavButton text='What I Can Do' buttonId='2' className='nav-button' style={xsStyle} />
                </Row>
            </>
        );
    }

    return (
        <div className='navbar'>
            <NavButton text='Who I Am' buttonId='0' className='nav-button left-button-xl rotate-ccw-10' style={styles[0]} />
            <NavButton text='Where I&rsquo;ve Been' buttonId='1' className='nav-button left-button-xl' style={styles[1]} />
            <NavButton text='What I Can Do' buttonId='2' className='nav-button left-button-xl rotate-cw-10' style={styles[2]} />
        </div>
    )
}

export default Navbar;