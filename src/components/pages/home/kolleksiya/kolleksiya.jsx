import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img from "../../../lib/img/kolleksiyabac.png"
import "./kolleksiya.css"
const Kolleksiya = () => {

    return (
      <section className='kolleksiya'>
        <div className="container">
        <CarouselProvider className='jojojojo'
            naturalSlideWidth={350}
            naturalSlideHeight={150}
            totalSlides={3}
        >

            <Slider className='karusel'>
                <Slide index={0}>
                    <img className='karusel_img' src={img} alt="img" />
                    <div className='btns'>
                        <button className='btn__plyus'>+</button><p></p>
                        <button className='btn__plyus2'>+</button>
                        <button className='btn__plyus3'>+</button>
                        
                    </div>
                </Slide>
                <Slide index={1}>
                    <img className='karusel_img' src={img} alt="img" />
                    <div className='btns'>
                        <button className='btn__plyus'>+</button>
                    </div>
                </Slide>
                <Slide index={2}>
                    <img className='karusel_img' src={img} alt="img" />
                </Slide>
            </Slider>

            <div className='bordi_keldi'>
            <ButtonBack className='back'>Back</ButtonBack>
            <ButtonNext className='next'>Next</ButtonNext>
            </div>
        </CarouselProvider>
        </div>
      </section>
    );
};
export  {Kolleksiya};