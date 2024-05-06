import React from 'react';
import "./hero.css"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Img from "../../../lib/img/banner.png"
import Imgg from "../../../lib/img/banner.png"
import Imggg from "../../../lib/img/banner.png"

const Carousel = () => {

    return (
        <div className="container">
            <CarouselProvider className='jojojojo'
                naturalSlideWidth={350}
                naturalSlideHeight={150}
                totalSlides={3}
            >

                <Slider className='karusel'>
                    <Slide index={0} className='caro'>
                        
                            <img className='karusel_img' src={Img} alt="img" />
                            <div className='Caru__div'>
                            <h1 className='caru__title'>Финальная
                                распродажа</h1>

                            <p className='caru__text'>Только 30 моделей можно забрать домой со скидкой до 45%</p>

                            <a className='caru__link' href="#link">Подробнее</a>
                        </div>
                    </Slide>
                    <Slide index={1}>
                        
                    <img className='karusel_img' src={Img} alt="img" />
                            <div className='Caru__div'>
                            <h1 className='caru__title'>Финальная
                                распродажа</h1>

                            <p className='caru__text'>Только 30 моделей можно забрать домой со скидкой до 45%</p>

                            <a className='caru__link' href="#link">Подробнее</a>
                        </div>
                        </Slide>
                    <Slide index={2}>
                    <img className='karusel_img' src={Img} alt="img" />
                            <div className='Caru__div'>
                            <h1 className='caru__title'>Финальная
                                распродажа</h1>

                            <p className='caru__text'>Только 30 моделей можно забрать домой со скидкой до 45%</p>

                            <a className='caru__link' href="#link">Подробнее</a>
                        </div>
                        </Slide>
                </Slider>

                <div className='bordi_keldi'>
                    <ButtonBack className='back'>Back</ButtonBack>
                    <ButtonNext className='next'>Next</ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    );
};
export default Carousel;