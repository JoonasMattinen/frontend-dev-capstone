import Mario1 from '../assets/images/Mario and Adrian A cropped.jpg'
import Mario2 from '../assets/images/Mario and Adrian b cropped.jpg'

const About = () => {
    return (
        <>
            <div className='text-wrapper'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p className='about-paragraph'>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed
                    consequat ultrices diam, non feugiat
                    lorem vestibulum in. Interdum et
                    malesuada fames ac ante ipsum
                    primis in faucibus. Maecenas vehicula
                    risus ultrices felis sollicitudin,
                    in bibendum dui mollis.
                </p>
            </div>
            <div className='image-wrapper'>
                <img className='inner' src={Mario1} alt="mario and adrian"></img>
                <img className='outer' src={Mario2} alt="mario and adrian"></img>
            </div>
        </>
    )
}

export default About;