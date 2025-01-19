import Mario1 from '../assets/images/Mario and Adrian A cropped.jpg'
import Mario2 from '../assets/images/Mario and Adrian b cropped.jpg'

const About = () => {
    return (
        <section id='about' className='about'>
            <div className='text-wrapper'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p className='about-paragraph'>
                Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>
            </div>
            <div className='image-wrapper'>
                <img className='inner' src={Mario1} alt="mario and adrian"></img>
                <img className='outer' src={Mario2} alt="mario and adrian"></img>
            </div>
        </section>
    )
}

export default About;