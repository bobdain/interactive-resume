import MyNavButton from './MyNavButton';

const MyNavbar = () => {
    return (
        <div className='my-navbar'>
            <MyNavButton text='Who I Am' buttonId='0' className='my-nav-button rotate-ccw-10'/>
            <MyNavButton text='Where I&lsquo;ve Been' buttonId='1' className='my-nav-button' />
            <MyNavButton text='What I Can Do' buttonId='2' className='my-nav-button rotate-cw-10'/>
        </div>
    )
}

export default MyNavbar;