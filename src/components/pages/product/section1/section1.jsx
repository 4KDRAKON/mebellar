import React from "react"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./section1.css"
import Pro from "../../../lib/img/product__img.png"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import kull from "../../../lib/img/kulrang.svg"
import Mall from "../../../lib/img/mall.svg"
import Qoar from "../../../lib/img/qora.svg"
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import hvfhh from "../../../lib/img/kartalar.svg"
import Api from "../../../api/api2.json"
import "../../home/apies2/apies.css"
function Section1() {
    const Ref = React.useRef(null)
    const ADD = ()=>{
        Ref.current.classList.add("Div__qoshincha__btn2")
    }
    const [value, setValue] = React.useState(2);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>

            <section className="section1">
                <div className="container">
                    <div className="section1__div">
                        <Carousel className="section1__div__caru">
                            <div>
                                <img src={Pro} />

                            </div>
                            <div>
                                <img src={Pro} />

                            </div>
                            <div>
                                <img src={Pro} />

                            </div>
                        </Carousel>
                    </div>

                    <div className="section1__div2">
                        <h2 className="section1__div2__title">Вешалка 10 Ferrumon</h2>
                        <p className="section1__div2__text">
                            Оценка покупателей:
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                            >
                                {/* <Typography component="legend">Controlled</Typography> */}
                                <Rating className="raiting"
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />

                            </Box>

                            <a className="section1__div2__link" href="#link">Нет отзывов</a>
                        </p>

                        <p className="section1__div2__text">Код товара:
                            <span className="section1__div2__text__span">i00078385</span>
                        </p>

                        <p className="section1__div2__text">Цвет:

                            <div className="section1__div2__text__div">
                                <button className="rang__btnlar">
                                    <img src={kull} alt="" />
                                </button>
                                <button className="rang__btnlar">
                                    <img src={Mall} alt="" />
                                </button>
                                <button className="rang__btnlar">
                                    <img src={Qoar} alt="" />
                                </button>
                            </div>

                        </p>


                        <div className="section1__div2__kupit">
                            <h2 className="section1__div2__kupit__text">
                                4,700 руб
                                <p className="section1__div2__kupit__text2">2,700 руб</p>
                            </h2>
                            <Button className="section1__div2__kupit__btn" variant="contained" color="success">
                                Купить
                            </Button>

                            <Checkbox className="section1__div2__kupit__heart" {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

                            <Button className="section1__div2__kupit__btn2" variant="outlined">Купить в кредит</Button>



                            <p className="section1__div2__kupit__text3">
                                Оплата частями:
                                5 x 3 751 грн.
                            </p>

                            <a className="kartalar" href="#link">
                                <img src={hvfhh} alt="" />
                            </a>
                        </div>

                        <h2 className="section__div1__titlee">Размер и Характеристики</h2>
                        <p className="sdc__text">Материал корпуса
                            ............................................................
                            <span className="sdc__span">Металл</span></p>
                        <p className="sdc__text">Изготовитель
                            ....................................................................
                            <span className="sdc__span">Украина</span></p>


                        <h2 className="jdbnfvjdvkjdbjdfjbdfjbv">Описание</h2>
                        <p className="jdsnhbvjhkbfrhuhniemoxmuutt465h5">
                            Вешалка в прихожую из прочного металла из серии "Ferrumon"; Металл покрыт специальной краской, которая защищает металл от коррозии продлевает срок службы; Обратите внимание, что цветопередача фото с каталога может отличаться от цветов в живом виде из-за особенностей передачи цветов монитора Вашего компьютера, ноутбука, планшета и т.д.
                        </p>

                    </div>


                    <ul className="section1__api">
                    {
                        Api.map(item=>(
                            <li className="apies2__list__itemmmm" key={item.id} onClick={ADD}>
                               <a className="apies2__list__item__link" href="#link">
                               <img className="apies2__img" src={item.img} alt={item.title} width={196} height={150}/>
                               </a>
                                <h2 className="apies2__item__title">{item.title}</h2>
                               <span className="son">{item.son}</span>
                               <span className="son2">{item.son2}</span>
                               
                               
                               <div className="Div__qoshimcha" ref={Ref}>
                               
                                
                               </div>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </section>

        </>
    )
}
export { Section1 }