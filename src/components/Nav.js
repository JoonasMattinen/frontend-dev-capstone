import { DotsThreeVertical } from "@phosphor-icons/react";
import { useState } from "react";

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <nav>
            <button className="mobile-nav" onClick={toggleMenu}><DotsThreeVertical size={32}/></button>
            <ul className={`nav-links-wrapper ${isOpen ? "open" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Menu">Menu</a></li>
                <li><a href="/Testimonials">Testimonials</a></li>
                <li><a href="/OrderOnline">Order online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;