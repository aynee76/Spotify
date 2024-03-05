import './LandingPageHeader.css'
import Logo from './Logo'

export const LandingPageHeader = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <Logo />
            </div>
            <div className='menu'>
                <HeaderNavigation />
            </div>
        </header>
    )
}

const HeaderNavigation = () => {
    return (
        <ul>
            <li><a href="#/Premium" className='nav'>Premium</a></li>
            <li><a href="#/Download" className='nav'>Download</a></li>
            <li><a href="#/Support" className='nav'>Support</a></li>
            <li>|</li>
            <li className='active'><a href="#/Sign up" className='nav'>Sign up</a></li>
            <li className='active'><a href="#/Log in" className='nav'>Log in</a></li>
        </ul>
    )
}