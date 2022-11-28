import './App.css';
import MyNavbar from './components/MyNavbar';
import ImageArray from './components/ImageArray';

// Test 1

function App() {
    return (
        <div>
            <MyNavbar />
            <div className='image-area'>
                <div className='circle-container' >
                    <ImageArray />
                </div>
            </div>
        </div>
    );
}

export default App;