import './App.css';
import Navbar from './components/Navbar';
import ImageArray from './components/ImageArray';
import { useReducer, createContext, useState, useEffect } from 'react';
import ButtonStateContext from './components/ButtonState.js';


//const buttonState = 1;

function reducer(state, item) {
    return [...state, item]
}

function App() {
    const [buttonState, setButtonState] = useReducer(reducer, []);

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

    return (
        <ButtonStateContext.Provider value={{ buttonState, setButtonState }}>
            <Navbar  windowWidth={windowSize[0]}/>
            <div className='image-area'>
                <div className='circle-container' >
                    <ImageArray windowWidth={windowSize[0]} />
                </div>
            </div>
        </ButtonStateContext.Provider>
    );
}

export default App;