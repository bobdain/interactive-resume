import MyNavButton from './MyNavButton';

const MyNavbar = () => {
    return (
        <div className='my-navbar'>
            <MyNavButton text='Who I Am' className='my-nav-button rotate-ccw'/>
            <MyNavButton text='Where I&lsquo;ve Been' className='my-nav-button' />
            <MyNavButton text='What I Can Do' className='my-nav-button rotate-cw'/>
        </div>
    )
}

export default MyNavbar;