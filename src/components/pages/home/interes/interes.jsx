import React from "react";
import o from "../../../lib/img/oshxona.png"
import o3 from "../../../lib/img/oshxona3.png"
import o2 from "../../../lib/img/oshxona2.png"
import "./interes.css"
function Interses() {
    return (
        <>
            <section className="interes">
                <div className="container">
                    <h2 className="interes__title">Интересное про нас</h2>

                    <a className="interes__link" href="#link">Блог</a>
                    <a className="interes__link" href="#link">Instagram</a>
                    <a className="interes__link" href="#link">Facebook</a>




                    <ul className="interes__list">
                        <li className="interes__item">
                            <img src={o} alt="" />
                            <h2 className="interes__item__title">Как правильно выбрать диван</h2>
                            <p className="interes__item__text">Диван — многофункциональная мебель, которую приобретают для гостиной и спальни, кухни и детской. Он может быть домашним и офисным.Его используют для сна, на него сажают гостей.</p>
                            <a className="interes__item__link" href="#link">Читать Больше <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="12.5" fill="#72BF44" />
                                <path d="M10.7142 7.14307L12.7176 9.12864C14.3153 10.7121 15.1141 11.5038 15.2371 12.4688C15.2672 12.7053 15.2672 12.9445 15.2371 13.1809C15.1141 14.1459 14.3153 14.9377 12.7176 16.5211L10.7142 18.5067" stroke="white" stroke-linecap="round" />
                            </svg>
                            </a>
                        </li>
                        <li className="interes__item">
                            <img src={o2} alt="" />
                            <h2 className="interes__item__title">Диван на балкон или лоджию</h2>
                            <p className="interes__item__text">Обустроив на балконе уютный уголок для отдыха можно расширить жилое пространство квартиры. Перед этим желательно утеплить это помещение или хотя бы установить качественные стеклопакеты. </p>
                            <a className="interes__item__link" href="#link">Читать Больше <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="12.5" fill="#72BF44" />
                                <path d="M10.7142 7.14307L12.7176 9.12864C14.3153 10.7121 15.1141 11.5038 15.2371 12.4688C15.2672 12.7053 15.2672 12.9445 15.2371 13.1809C15.1141 14.1459 14.3153 14.9377 12.7176 16.5211L10.7142 18.5067" stroke="white" stroke-linecap="round" />
                            </svg>
                            </a>
                        </li>
                        <li className="interes__item">
                            <img src={o3} alt="" />
                            <h2 className="interes__item__title">Как правильно выбрать диван</h2>
                            <p className="interes__item__text">Диван — многофункциональная мебель, которую приобретают для гостиной и спальни, кухни и детской. Он может быть домашним и офисным.Его используют для сна, на него сажают гостей.</p>
                            <a className="interes__item__link" href="#link">Читать Больше <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="12.5" fill="#72BF44" />
                                <path d="M10.7142 7.14307L12.7176 9.12864C14.3153 10.7121 15.1141 11.5038 15.2371 12.4688C15.2672 12.7053 15.2672 12.9445 15.2371 13.1809C15.1141 14.1459 14.3153 14.9377 12.7176 16.5211L10.7142 18.5067" stroke="white" stroke-linecap="round" />
                            </svg>
                            </a>
                        </li>
                    </ul>

                </div>
            </section>

        </>
    )
}
export { Interses }