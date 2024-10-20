import HeroImage from '../assets/images/restauranfood.jpg'

const Hero = () => {
    return(
        <section className='hero'>
            <div className='hero-content-wrapper'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <div className='hero-paragraph'>
                    <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                </div>
                <button type='button'>Reserve a table</button>
            </div>
            <div className="image-wrapper">
                <img src={HeroImage} alt="hero-image"></img>
            </div>
        </section>
    )
}

export default Hero;