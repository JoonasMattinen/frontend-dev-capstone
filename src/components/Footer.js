import Restaurant from '../assets/images/restaurant cropped.jpg'

const Footer = () => {
    return(
        <footer>
            <div className="image-wrapper">
                <img src={Restaurant} alt="restaurant"></img>
            </div>
            <div className="footer-links">
                <h3>Doormat Navigation</h3>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/menu'>Menu</a>
                <a href='/reservation'>Reservation</a>
                <a href='/'>Order Online</a>
                <a href='/'>Login</a>
            </div>
            <div className="footer-links">
                <h3>Contact</h3>
                <p>Address: Lemonroad 1</p>
                <p>Phone: 040123123</p>
                <p>Email: Little.lemon@gmail.com</p>
            </div>
            <div className="footer-links">
                <h3>Social Media links</h3>
                <a href='https://instagram.com'>Instagram</a>
                <a href='https://linkedin.com'>Linkedin</a>
                <a href='https://x.com'>X</a>
            </div>
        </footer>
    )
}

export default Footer;