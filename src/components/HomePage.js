import About from "./About"
import Divider from "./Divider"
import Hero from "./Hero"
import Specials from "./Specials"
import Testimonials from "./Testimonials"

const Homepage = () => {
    return(
        <>
         <Hero />
         <Divider />
         <Specials />
         <Testimonials />
         <About />
        </>
    )
}

export default Homepage