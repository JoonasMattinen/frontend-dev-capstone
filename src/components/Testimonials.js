import Moustache from '../assets/images/human-3782189_1280.jpg'
import Woman1 from '../assets/images/woman1.jpg'
import Woman2 from '../assets/images/woman-2542252_1280.jpg'
import Man1 from '../assets/images/man1.jpg'
import { Star } from "@phosphor-icons/react";

const Testimonials = () => {
    return(
        <section className='testimonials'>
            <h3>Testimonials</h3>
            <div className="testimonial-wrapper">
                <div className='testimonial-card'>
                    <span>
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                    </span>
                    <div className='image'>
                        <img src={Moustache} alt='man'></img>
                        <span>Carl</span>
                    </div>
                    <span>“Awesome expirience”</span>
                </div>
                <div className='testimonial-card'>
                    <span>
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                    </span>
                    <div className='image'>
                        <img src={Woman1} alt='woman'></img>
                        <span>Aisha</span>
                    </div>
                    <span>“It just works!”</span>
                </div>
                <div className='testimonial-card'>
                    <span>
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                    </span>
                    <div className='image'>
                        <img src={Man1} alt='man'></img>
                        <span>Tom</span>
                    </div>
                    <span>“Absolutely stunning”</span>
                </div>
                <div className='testimonial-card'>
                    <span>
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                        <Star color='#F4CE14' weight='fill' />
                    </span>
                    <div className='image'>
                        <img src={Woman2} alt='woman'></img>
                        <span>Tina</span>
                    </div>
                    <span>“Next level!”</span>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;