import './App.css';
import Navbar from './components/Navbar';
import JobImageArray from './components/JobImageArray';
import SiteImageArray from './components/SiteImageArray';
import { useReducer, createContext, useState, useEffect } from 'react';
import ButtonStateContext from './components/ButtonState';
import Store from './Store'

function reducer(state, item) {
    return { ...state, item }
}

function App() {
    const [selectedButton, setSelectedButton] = useReducer(reducer, { item: 1 });

    // TODO: Move this into utility component
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    // TODO: Move this into utility component
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    console.log('selectedButton:', selectedButton);

    return (
        <Store.Provider value={{ selectedButton, setSelectedButton }}>
            <Navbar windowWidth={windowSize[0]} />
            <div className='image-area'>
                <div className='circle-container' >
                    {selectedButton.item === 1 && (
                        <JobImageArray windowWidth={windowSize[0]} />
                    )}
                    {selectedButton.item === 2 && (
                        <SiteImageArray windowWidth={windowSize[0]} />
                    )}
                </div>
            </div>
        </Store.Provider>
    );
}

export default App;