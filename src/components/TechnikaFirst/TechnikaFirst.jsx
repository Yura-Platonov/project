import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import css from './TechnikaFirst.module.css'; 
import image1 from '../../images/Photo1.1.jpg';
import image2 from '../../images/Photo1.2.jpg';
import image3 from '../../images/Photo1.3.jpg';

const TechnikaFirst = () => {
  
  
    return (
      <div className={css.sliderContainer}>
        <Splide options={ { rewind: true, pagination: false, } } aria-label="React Splide">
      <SplideSlide>
        <img src={image1} alt=" 1" />
      </SplideSlide>
      <SplideSlide>
        <img src={image2}  alt=" 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src={image3}  alt=" 3"/>
      </SplideSlide>
    </Splide>
      </div>
    );
  };
  
  export default TechnikaFirst;