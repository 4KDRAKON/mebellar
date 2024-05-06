import React from "react";
import "../favourite/f.css"
import Api from "../../api/api2.json"
import yurak from "../../lib/img/yurak2.svg"
import qayta from "../../lib/img/takror.svg"
import savat from "../../lib/img/savat2.svg"
import "../home/apies2/apies.css"

function Zak (){
    const Ref = React.useRef(null)
    const ADD = ()=>{
        Ref.current.classList.add("Div__qoshincha__btn2")
    }
    return(

        <>
        <section className="zak">
            <div className="container">
            <h2 className="fav__title">Просмотренные товары</h2>

            <ul className="fav__list">
                    {
                        Api.splice(1,2).map(item => (
                            <li className="apies2__list__item" key={item.id} onClick={ADD}>
                                <a className="apies2__list__item__link" href="#link">
                                    <img className="apies2__img" src={item.img} alt={item.title} width={378} height={378} />
                                </a>
                                <h2 className="apies2__item__title">{item.title}</h2>
                                <span className="son">{item.son}</span>
                                <span className="son2">{item.son2}</span>
                                <button className="yurak__apies2">
                                    <img src={yurak} alt="logo" width={40} height={40} />
                                </button>
                                <div className="Div__qoshimcha" ref={Ref}>
                                    <button className="Div__qoshincha__btn">
                                        <img src={qayta} alt="logo" width={40} height={40} />
                                    </button>
                                    <button className="Div__qoshincha__btn">
                                        <img src={savat} alt="logo" width={40} height={40} />
                                    </button>
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
export {Zak}