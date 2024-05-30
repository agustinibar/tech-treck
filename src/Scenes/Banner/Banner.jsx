import { useState } from 'react';
import styles from './banner.module.css';
import { Testimonials } from '../Banner/Testimonials/Testimonials';
import { CallToAction } from '../Banner/CTA/CallToAction';
import { Info } from '../Banner/Info/Info';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [ <Testimonials/>, <CallToAction/>, <Info/> ];

    const nextSlide = ()=>{
        setCurrentSlide((prev)=> (prev + 1) % slides.length);
    };

    const prevSlide = ()=>{
        setCurrentSlide((prev)=>(prev - 1 + slides.length) % slides.length);
    };

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.navButton}>Prev</button>
      <div className={styles.slideContainer}>
        {slides[currentSlide]}
      </div>
      <button onClick={nextSlide} className={styles.navButton}>Next</button>
    </div>
  )
}

export default Banner