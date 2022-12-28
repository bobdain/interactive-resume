import './App.css';
import MyNavbar from './components/MyNavbar';
import ImageArray from './components/ImageArray';
import { useReducer, createContext } from 'react';
import ButtonStateContext from './components/ButtonState.js';


//const buttonState = 1;

function reducer(state, item) {
    return [...state, item]
}

function App() {
    const [buttonState, setButtonState] = useReducer(reducer, []);

    return (
        <ButtonStateContext.Provider value={{ buttonState, setButtonState }}>
            <MyNavbar />
            <div className='image-area'>
                <div className='circle-container' >
                    <ImageArray />
                </div>
            </div>
        </ButtonStateContext.Provider>
    );
}

export default App;