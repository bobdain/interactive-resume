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

//import Boeing1 from '../assets/employer-icons/boeing-1.jpg';

const workHistoryImages = [
    { img: Kymeta, alt: 'Kymeta logo', class: 'fixed-position corporate-logo image1-position' },
    { img: Tektronix, alt: 'Tektronix logo', class: 'fixed-position corporate-logo image2-position' },
    { img: Fujifilm, alt: 'Fujifilm logo', class: 'fixed-position corporate-logo image3-position' },
    { img: InMusic, alt: 'In Music logo', class: 'fixed-position corporate-logo image4-position' },
    
    { img: Boeing, alt: 'Boeing logo', class: 'fixed-position corporate-logo image5-position' },

    { img: ThermoFisher, alt: 'Thermo Fisher logo', class: 'fixed-position corporate-logo image6-position' },
    { img: Elektrobit, alt: 'Elektrobit logo', class: 'fixed-position corporate-logo image7-position' },
    { img: Microsoft, alt: 'Microsoft logo', class: 'fixed-position corporate-logo image8-position' },
    { img: Schneider, alt: 'Schneider Electric logo', class: 'fixed-position corporate-logo image9-position' },
   
    { img: Portrait, alt: 'a hard working guy', class: 'fixed-position portrait-position portrait' }
    ];
    

const ImageArray = () => {
    return (
        <div className='images-container'>
            {workHistoryImages.map((message, index) => (
                <ArrayImage key={index} image={message} />
            ))}
        </div>
    )
}

export default ImageArray;