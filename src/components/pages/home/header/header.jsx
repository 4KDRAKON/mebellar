import React from "react";
import Logo from "../../../lib/img/header__up__img.svg"
import Logo2 from "../../../lib/img/Location.svg"
import Logo3 from "../../../lib/img/email.svg"
import Logo4 from "../../../lib/img/header__logo.svg"
import LOgo5 from "../../../lib/img/chatalog.svg"
import Logo6 from "../../../lib/img/lupa.svg"
import Logo7 from "../../../lib/img/yurak.svg"
import Logo8 from "../../../lib/img/savat.svg"
import Logo9 from "../../../lib/img/odam.svg"
import Logo10 from "../../../lib/img/header__menu.svg"
import Logo11 from "../../../lib/img/qora__lupa.svg"
import ac from "../../../lib/img/accaunt.svg"
import sum from "../../../lib/img/sumka.svg"
import yum from "../../../lib/img/yurakcha.svg"
import koz from "../../../lib/img/koz.svg"
import qon from "../../../lib/img/maydaqongiroq.svg"
import sov from "../../../lib/img/gift.svg"
import plas from "../../../lib/img/karta.svg"
import loc from "../../../lib/img/locationnnnnnn.svg"
import { NavLink } from "react-router-dom";
import "./header.css"
function Header() {

    const Ref = React.useRef(null);

    const Add2222 = () => {
        // Ref.current.className = "sichqon__list2";
        Ref.current.classList.remove("sichqon__list2");
        Ref.current.classList.add("sichqon__list");
    };
    const Add22222 = () => {
        // Ref.current.className = null;
        Ref.current.classList.add("sichqon__list2");
    };

    // useEffect(() => {
    //     const checkIfClickedOutside = e => {
    //         // Agar ro'yxat ko'rsatilgan va bosilgan element ro'yxatga yoki uning ichidagi elementlarga tegishli emas bo'lsa
    //         if (Ref.current && !Ref.current.contains(e.target)) {
    //             Ref.current.classList.remove("sichqon__list"); // Ro'yxatni yashirish
    //         }
    //     };

    //     // `document`da click hodisasini tinglash
    //     document.addEventListener("mousedown", checkIfClickedOutside);

    //     return () => {
    //         // Komponent o'chirilganda, hodisa tinglovchisini tozalash
    //         document.removeEventListener("mousedown", checkIfClickedOutside);
    //     };
    // }, []);
    // }
    return (

        <>
            <header className="header">
                <div className="container">
                    <div className="hea__up">
                        <p className="up__text">
                            <img className="up__img" src={Logo} alt="" />
                            Доставка и сборка по Харькову бесплатно!
                        </p>
                    </div>





                    <div className="hea__up2">
                        <p className="up2__text">kharkivmebel - интернет-магазин качественной мебели</p>

                        <div className="up__div">
                            <a className="up2__link" href="#link">
                                <img src={Logo2} alt="logo" />
                                Харьков
                            </a>

                            <a className="up2__link" href="#link">
                                <img src={Logo3} alt="logo" />
                                kharkivmebelinfo@gmail.com
                            </a>
                        </div>
                    </div>




                    <div className="asosiy__div">
                        <div className="asosiy__div__div">
                            <a href="#link">
                                <img className="header__logo" src={Logo4} alt="logo" width={125} height={86} />
                            </a>

                            <button className="header_btn" onClick={Add2222}>
                                <img src={LOgo5} alt="logo" />
                                Каталог
                            </button>
                        </div>

                        <div className="input__div">
                            <input className="inputtttt" type="text" placeholder="Искать Товар" />
                            <button className="inpu__btn">
                                <img src={Logo6} alt="logo" />
                            </button>
                            <button className="inpu__btn2">
                                <img src={Logo11} alt="logo" />
                            </button>
                        </div>

                        {/* <div className="header__last"> */}

                        <select className="select">
                            <option value="1">+38093-717-29-29</option>
                            <option value="1">+38093-717-29-29</option>
                            <option value="1">+38093-717-29-29</option>
                        </select>



                        <ul className="last__list">
                            <li className="last__item">
                                <a href="#link">
                                    <img src={Logo7} alt="logo" />
                                </a>
                            </li>
                            <li className="last__item2">
                                <a href="#link">
                                    <img src={Logo8} alt="logo" />
                                </a>
                            </li>
                            <li className="last__item">
                                <a href="#link">
                                    <img src={Logo9} alt="logo" />
                                </a>
                            </li>
                        </ul>
                        <button className="menu__btn">
                            <img src={Logo10} alt="logo" />
                        </button>
                        {/* </div> */}
                    </div>

                    <ul className="list">
                        <li className="list__item">
                            <NavLink className="list__link" to="/">Харьков мебель</NavLink>
                        </li>
                        <li className="list__item">
                            <NavLink className="list__link" to="/About__info" >Про нас</NavLink>
                        </li>
                        <li className="list__item">
                            <NavLink className="list__link"to="/Shop__info">Мебель под заказ</NavLink>
                        </li>
                        <li className="list__item">
                            <NavLink className="list__link"  to="/Product">Шкафы купе</NavLink>
                        </li>
                        <li className="list__item">
                            <NavLink className="list__link" to="/Product">Доставка і оплата</NavLink>
                        </li>
                        <li className="list__item">
                            <NavLink className="list__link"  to="/Contact__info">Контакты</NavLink>
                        </li>
                        <li className="list__item">
                            <a className="list__link" href="#link">Письмо директору</a>
                        </li>
                        <li className="list__item">
                            <a className="list__link" href="#link">Бренды</a>
                        </li>
                        <li className="list__item">
                            <a className="list__link" href="#link">Дизайн интерьера</a>
                        </li>
                    </ul>


                    <ul className="sichqon__list2" ref={Ref}>
                        <button className="bjhfbejfbejdebvddsfndxchdsfbgdcshgdfshfdjhbdhgfdbgfdjfh" onClick={Add22222}>X</button>
                        <li className="sichqon__item">
                            <img src={ac} alt="logo" width={40} height={40} />
                            <a className="sichqon__item__link" href="#link">Erik Vadi <br />
                                <span className="sichqon__item__span">email@gmail.com</span>
                            </a>
                        </li>
                        <li className="sichqon__item">
                            <img src={sum} alt="logo" width={40} height={40} />
                            <NavLink className="sichqon__item__link" to="/Zakaz" >Мои заказы <br />

                            </NavLink>
                        </li>
                        <li className="sichqon__item">
                            <img src={yum} alt="logo" width={40} height={40} />
                            <NavLink className="sichqon__item__link" to="/Fav__info">Список желаний <br />

                            </NavLink>
                        </li>


                        <li className="sichqon__item">
                            <img src={koz} alt="logo" width={40} height={40} />
                            <a className="sichqon__item__link" href="#link">Просмотренные товары<br />

                            </a>
                        </li>


                        <li className="sichqon__item">
                            <img src={qon} alt="logo" width={40} height={40} />
                            <a className="sichqon__item__link" href="#link"> Рассылки<br />

                            </a>
                        </li>


                        <li className="sichqon__item">
                            <img src={sov} alt="logo" width={40} height={40} />
                            <a className="sichqon__item__link" href="#link">Мой бонусный счет <br />

                            </a>
                        </li>


                        <li className="sichqon__item">
                            <img src={plas} alt="logo" width={40} height={40} />
                            <a className="sichqon__item__link" href="#link">Оплата <br />

                            </a>
                        </li>


                        <li className="sichqon__item">
                            <img src={loc} alt="logo" width={40} height={40} />
                            <a className="sichqon__item__link" href="#link">Доставка <br />

                            </a>
                        </li>
                    </ul>


                </div>
            </header>

        </>
    )
}

export default Header;

