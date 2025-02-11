import GreekSaladImg from '../assets/images/greek salad.jpg'
import Bruschetta from '../assets/images/bruschetta-5699486_1920.jpg'
import Dessert from '../assets/images/lemon dessert.jpg'
import { CarProfile } from "@phosphor-icons/react";

const Specials = () => {
    return(
    <section id='menu' className='specials'>
            <div className='specials-heading'>
            <h3>THIS WEEKS SPECIALS!</h3>
            <button aria-live='On Click' type='button'>Online menu</button>
        </div>
        <div className='image-wrapper'>
            <div className='image-card'>
                <img src={GreekSaladImg} alt='Greek salad'></img>
                <div className='image-text-wrapper'>
                    <div className="header">
                        <span className='header-text'>Greek salad</span>
                        <span className='price'>$ 12.99</span>
                    </div>
                    <span>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</span>
                    <div className="CTA">
                        <span>Order a delivery</span>
                        <i>
                            <CarProfile />
                        </i>
                    </div>
                </div>
            </div>
            <div className='image-card'>
                <img src={Bruschetta} alt='Bruschetta'></img>
                <div className='image-text-wrapper'>
                    <div className="header">
                        <span className='header-text'>Bruschetta</span>
                        <span className='price'>$ 5.99</span>
                    </div>
                    <span>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil</span>
                    <div className="CTA">
                        <span>Order a delivery</span>
                        <i>
                            <CarProfile />
                        </i>
                    </div>
                </div>
            </div>
            <div className='image-card'>
                <img src={Dessert} alt='Lemon Dessert'></img>
                <div className='image-text-wrapper'>
                    <div className="header">
                        <span className='header-text'>Lemon Dessert</span>
                        <span className='price'>$ 5.00</span>
                    </div>
                    <span>This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined</span>
                    <div className="CTA">
                        <span>Order a delivery</span>
                        <i>
                            <CarProfile />
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Specials;