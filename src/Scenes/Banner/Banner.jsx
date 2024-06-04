import { useState } from 'react';
import styles from './banner.module.css';
import  Testimonials  from '../Banner/Testimonials/Testimonials';
import  CallToAction  from '../Banner/CTA/CallToAction';
import  Info  from '../Banner/Info/Info';


const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [ <Testimonials key={1}/>, <CallToAction key={2}/>, <Info key={3}/> ];

    const nextSlide = ()=>{
        setCurrentSlide((prev)=> (prev + 1) % slides.length);
    };

    const prevSlide = ()=>{
        setCurrentSlide((prev)=>(prev - 1 + slides.length) % slides.length);
    };

  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer}>
        {slides[currentSlide]}
      </div>
      <button onClick={nextSlide} className={styles.navButtonN}>&#10095;</button>
      <button onClick={prevSlide} className={styles.navButtonP}>&#10094;</button>
    </div>
  )
}

export default Banner