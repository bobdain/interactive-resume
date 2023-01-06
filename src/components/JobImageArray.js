import Portrait from '../assets/profile-pic.png';
import ArrayImage from './ArrayImage'
import Boeing from '../assets/employer-icons/boeing-1.png';
import Elektrobit from '../assets/employer-icons/elektrobit-1.jpg';
import Fujifilm from '../assets/employer-icons/fujifilm-1.png';
import InMusic from '../assets/employer-icons/in-music-1.png';
import Kymeta from '../assets/employer-icons/kymeta-1.jpg';
import Microsoft from '../assets/employer-icons/microsoft-1.jpeg';
import Schneider from '../assets/employer-icons/schneider-electric-1.png';
import Tektronix from '../assets/employer-icons/tektronix-1.jpg';
import ThermoFisher from '../assets/employer-icons/thermo-fisher-1.png';
import { useWindowWidth } from '@react-hook/window-size'

const JobImageArray = (props) => {
    const workHistoryImages = [
        { image: Kymeta, 
            tooltip: '2018-2020 (short-term contracting)',
            alt: 'Kymeta logo', 
            class: 'fixed-position corporate-logo image1of9-position' },
        { image: Tektronix, 
            tooltip: '2018-2020 (short-term contracting)',
            alt: 'Tektronix logo', 
            class: 'fixed-position corporate-logo image2of9-position' },
        { image: Fujifilm, 
            tooltip: '2018-2020 (short-term contracting)',
            alt: 'Fujifilm logo', 
            class: 'fixed-position corporate-logo image3of9-position' },
        { image: InMusic, 
            tooltip: '2018-2020 (short-term contracting)',
            alt: 'In Music logo', 
            class: 'fixed-position corporate-logo image4of9-position' },

        { image: Boeing, 
            tooltip: '2018-2020 (short-term contracting)',
            alt: 'Boeing logo', 
            class: 'fixed-position corporate-logo image5of9-position' },

        { image: ThermoFisher, 
            tooltip: '2011-2017',
            alt: 'Thermo Fisher logo', 
            class: 'fixed-position corporate-logo image6of9-position' },
        { image: Elektrobit, 
            tooltip: '2008-2011',
            alt: 'Elektrobit logo', 
            class: 'fixed-position corporate-logo image7of9-position' },
        { image: Microsoft, 
            tooltip: '2004-2008',
            alt: 'Microsoft logo', 
            class: 'fixed-position corporate-logo image8of9-position' },
        { image: Schneider, 
            tooltip: '2020 - Present',
            alt: 'Schneider Electric logo', 
            class: 'fixed-position corporate-logo image9of9-position' },

        //{ img: Portrait, alt: 'a hard working guy', class: 'fixed-position portrait-position portrait' }
    ];

    return (
        <div className='images-container'>
            {workHistoryImages.map((image, index) => (
                <ArrayImage key={index} image={image} />
            ))}

            {/* TEST: window width */}
            <p className='window-size-test test-position'>{ props.windowWidth }</p>
        </div>
    )
}

export default JobImageArray;