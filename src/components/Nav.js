import { DotsThreeVertical } from "@phosphor-icons/react";
import { useState } from "react";

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <nav>
            <button aria-label="On Click" className="mobile-nav" onClick={toggleMenu}><DotsThreeVertical size={32}/></button>
            <ul className={`nav-links-wrapper ${isOpen ? "open" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#order">Order online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;