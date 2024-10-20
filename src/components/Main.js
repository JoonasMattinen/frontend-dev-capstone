import About from './About'
import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'

const Main = () => {
    return(
        <main>
            <section className="hero">
                <Hero />
            </section>
            <section className='divider'></section>
            <section className='specials'>
                <Specials />
            </section>
            <section className='testimonials'>
                <Testimonials />
            </section>
            <section className='about'>
                <About />
            </section>
        </main>
    )
}

export default Main;