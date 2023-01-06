import ArrayImage from './ArrayImage'
import countryMeadow from '../assets/website-icons/country-meadow.png';
import dotsDots from '../assets/website-icons/dots-dots.png';
import goVerbs from '../assets/website-icons/go-verbs.png';
import fredsMaze from '../assets/website-icons/freds-maze.png';
import nucampSite from '../assets/website-icons/nucamp.png';
import { useWindowWidth } from '@react-hook/window-size'

const SiteImageArray = (props) => {
    const websiteImages = [
        {
            image: countryMeadow,
            tooltip: 'e-Commerce Site',
            alt: 'Country Meadow Ltd. logo',
            class: 'fixed-position corporate-logo image1of5-position'
        },
        {
            image: dotsDots,
            tooltip: 'Casual Game',
            alt: 'Dot\'s Dots game logo',
            class: 'fixed-position corporate-logo image2of5-position'
        },

        {
            image: goVerbs,
            tooltip: 'Spanish Verbs',
            alt: 'GoVerbs logo',
            class: 'fixed-position corporate-logo image3of5-position'
        },

        {
            image: fredsMaze,
            tooltip: 'Casual Game',
            alt: 'Fred\'s Maze game logo',
            class: 'fixed-position corporate-logo image4of5-position'
        },
        {
            image: nucampSite,
            tooltip: 'Bootcamp Tutorial',
            alt: 'Nucamp-site logo',
            class: 'fixed-position corporate-logo image5of5-position'
        },

        //{ img: Portrait, alt: 'a hard working guy', class: 'fixed-position portrait-position portrait' }
    ];

    return (
        <div className='images-container'>
            {websiteImages.map((message, index) => (
                <ArrayImage key={index} image={message} />
            ))}

            {/* TEST: window width */}
            <p className='window-size-test test-position'>{props.windowWidth}</p>
        </div>
    )
}

export default SiteImageArray;