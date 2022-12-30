import ArrayImage from './ArrayImage'
import countryMeadow from '../assets/website-icons/country-meadow.png';
import dotsDots from '../assets/website-icons/dots-dots.png';
import goVerbs from '../assets/website-icons/go-verbs.png';
import fredsMaze from '../assets/website-icons/freds-maze.png';
import nucampSite from '../assets/website-icons/nucamp.png';
import { useWindowWidth } from '@react-hook/window-size'

const SiteImageArray = (props) => {
    const websiteImages = [
        { img: countryMeadow, alt: 'Kymeta logo', class: 'fixed-position corporate-logo image2-position' },
        { img: dotsDots, alt: 'Fujifilm logo', class: 'fixed-position corporate-logo image3-position' },

        { img: goVerbs, alt: 'Boeing logo', class: 'fixed-position corporate-logo-large image5-position' },

        { img: fredsMaze, alt: 'Elektrobit logo', class: 'fixed-position corporate-logo image7-position' },
        { img: nucampSite, alt: 'Schneider Electric logo', class: 'fixed-position corporate-logo image8-position' },
        //{ img: GoVerbs, alt: 'Schneider Electric logo', class: 'fixed-position corporate-logo image9-position' },

        //{ img: Portrait, alt: 'a hard working guy', class: 'fixed-position portrait-position portrait' }
    ];

    return (
        <div className='images-container'>
            {websiteImages.map((message, index) => (
                <ArrayImage key={index} image={message} />
            ))}
            <p className='window-size-test test-position'>{ props.windowWidth }</p>
        </div>
    )
}

export default SiteImageArray;