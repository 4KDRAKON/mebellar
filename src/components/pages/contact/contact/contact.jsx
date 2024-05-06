import React from "react"
import "./contact.css"
import img from "../../../lib/img/facebook.svg"
import img2 from "../../../lib/img/instagram.svg"
import map from "../../../lib/img/mappp.png"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import m from "../../../lib/img/mazzza.png"
function Contact() {
    return (
        <>
            <section className="contact">
                <div className="container">
                    <h2 className="contact__title">Контакты</h2>
                    <p className="contact__text">При создании генератора
                        мы использовали небезизвестный универсальный код речей.
                        Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце.</p>



                        <div className="con__div">
                            <ul className="con__div__list">
                                <li className="condiv__item">
                                    <h2 className="condiv__item__title">Контакты</h2>
                                </li>
                                <li className="condiv__item">
                                        <a className="condiv__item__link" href="#link">+38 050-2000-573</a>
                                        <a className="condiv__item__link" href="#link">+38 050-2000-573</a>
                                        <a className="condiv__item__link" href="#link">+38 050-2000-573</a>

                                        <a className="contact__link" href="#link">kharkivmebelinfo@gmail.com</a>
                                </li>
                                <li className="condiv__item">

                                </li>
                                        <h2 className="grafic">График работы</h2>



                                <li className="condiv__item">
                                    <p className="condiv__item__text">Понедельник-пятница:  09:00 - 18:00</p>
                                    <p className="condiv__item__text">Суббота:  10:00 - 16:00</p>
                                    <p className="condiv__item__text">Харьков, торговый центр на Гагарина 20А</p>
                                </li>
                                <li className="condiv__item">
                                        <h2 className="condiv__title__2">
                                        Соц. Сети
                                        </h2>

                                        <a href="#link">
                                            <img src={img} alt="" />
                                        </a>

                                        <a className="kfhjuehfjehfcdkldiwjfc" href="#link">
                                            <img src={img2} alt="" />
                                        </a>
                                </li>
                               
                            </ul>

                            <img src={map} alt="mapp" width={1053} height={502} />
                        </div>

                        <CarouselProvider className='jojojo'
                naturalSlideWidth={350}
                naturalSlideHeight={150}
                totalSlides={3}
            >

                <Slider className='karusel'>
                    <Slide index={0} className='caro'>
                        
                            <img className='karusel_img' src={m} alt="img" />
                           
                    </Slide>
                    <Slide index={1}>
                        
                    <img className='karusel_img' src={m} alt="img" />
                            
                        </Slide>
                    <Slide index={2}>
                    <img className='karusel_img' src={m} alt="img" />
                           
                           
                        </Slide>
                </Slider>

               
            </CarouselProvider>
                </div>
            </section>

        </>)
}
export { Contact }