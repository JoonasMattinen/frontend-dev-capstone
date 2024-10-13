import Logo from '../assets/images/Logo.svg'
import Nav from './Nav'

export default function Header(){
    return(
        <header className='header'>
            <img className='header-logo' src={Logo} alt="Site Logo"></img>
            <Nav/>
        </header>
    )
}