import React from "react";
import Switch from '@mui/material/Switch';
import "./katta__shop.css"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import XX from "../../../lib/img/item__x.svg"
import "../../home/apies2/apies.css"
import Api from "../../../api/apies.json"
import yurak from "../../../lib/img/yurak2.svg"
import qayta from "../../../lib/img/takror.svg"
import savat from "../../../lib/img/savat2.svg"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Input } from "../../home/input/input";
import Footer from "../../home/footer/footer";
function Katta__shop() {
    const Ref = React.useRef(null)
    const ADD = ()=>{
        Ref.current.classList.add("Div__qoshincha__btn2")
    }
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [sliderValue, setSliderValue] = React.useState([20, 37]);

    const handleChange2 = (event, newValue) => {
        setSliderValue(newValue);
    };

    const valuetext = (value) => {
        return `${value}°C`;
    };

    return (
        <>
            <section className="Katta__shop">
                <div className="container">
                    <div className="katta__shop1">
                        <p className="katta__shop1__text">
                            <Switch
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            Показывать только товары в наличии
                        </p>

                        <select className="katta__shop1__select" >
                            <option value="1">Цена</option>
                        </select>

                        <input className="input__number" type="number" placeholder="489" />
                        <input className="input__number" type="number" placeholder="36 954" />

                        <Box sx={{ width: 300 }}>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={sliderValue}
                                onChange={handleChange2}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </Box>
                        <hr />
                        <p className="katta__shop1__text1">
                            <Switch
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />

                            Товар участвует в акции
                        </p>
                        <hr />


                        <p className="katta__shop1__text1">
                            <Switch
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                                disabled
                            />

                            На товар действует скидка
                        </p>
                        <hr />

                        <select className="katta__shop1__select" >
                            <option value="1">Ширина</option>
                        </select>

                        <p className="input__number2__text">
                            от<input className="input__number2" type="number" placeholder="489" />
                            до
                            <input className="input__number2" type="number" placeholder="36 954" />
                        </p>
                        <hr />
                        <select className="katta__shop1__select" >
                            <option value="1">Длина</option>
                        </select>

                        <p className="input__number2__text">
                            от<input className="input__number2" type="number" placeholder="489" />
                            до
                            <input className="input__number2" type="number" placeholder="36 954" />
                        </p>
                        <hr />


                        <select className="katta__shop1__select" >
                            <option value="1">Основание Под Матрас</option>
                        </select>

                        <p className="input__number2__text">
                            от<input className="input__number2" type="number" placeholder="489" />
                            до
                            <input className="input__number2" type="number" placeholder="36 954" />
                        </p>
                        <hr />


                        <ul className="katta__shop1__list">

                        <select className="katta__shop1__select" >
                            <option value="1">Материал Корпуса</option>
                        </select>
                                <li className="katta__shop1__item">
                                    <a className="katta__shop1__list__link" href="#link">Hermes</a>
                                    <img src={XX} alt="logo" width={10} height={10} />
                                </li>
                                <li className="katta__shop1__item">
                                    <a className="katta__shop1__list__link" href="#link">3M</a>
                                    <img src={XX} alt="logo" width={10} height={10} />
                                </li>
                                <li className="katta__shop1__item">
                                    <a className="katta__shop1__list__link" href="#link">Norton</a>
                                    <img src={XX} alt="logo" width={10} height={10} />
                                </li>
                                <li className="katta__shop1__item">
                                    <a className="katta__shop1__list__link" href="#link">Awuka</a>
                                    <img src={XX} alt="logo" width={10} height={10} />
                                </li>
                                <li className="katta__shop1__item">
                                    <a className="katta__shop1__list__link" href="#link">Okuma</a>
                                    <img src={XX} alt="logo" width={10} height={10} />
                                </li>
                                <li className="katta__shop1__item">
                                    <a className="katta__shop1__list__link" href="#link">Смотреть Все</a>
                                   
                                </li>
                        </ul>
                    </div>

                    <ul className="kaaata__list">
                    
                    {
                        Api.map(item=>(
                            <li className="apies2__list__item" key={item.id} onClick={ADD}>
                               <a className="apies2__list__item__link" href="#link">
                               <img className="apies2__img" src={item.img} alt={item.title} width={378} height={378}/>
                               </a>
                                <h2 className="apies2__item__title">{item.title}</h2>
                               <span className="son">{item.son}</span>
                               <span className="son2">{item.son2}</span>
                               <button className="yurak__apies2">
                               <img  src={yurak} alt="logo" width={40} height={40}/>
                               </button>
                               <div className="Div__qoshimcha" ref={Ref}>
                                <button className="Div__qoshincha__btn">
                                    <img src={qayta} alt="logo" width={40} height={40}/>
                                </button>
                                <button className="Div__qoshincha__btn">
                                <img src={savat} alt="logo" width={40} height={40}/>
                                </button>
                               </div>
                            </li>
                            
                        ))
}
{
                        Api.map(item=>(
                            <li className="apies2__list__item254545" key={item.id} onClick={ADD}>
                               <a className="apies2__list__item__link" href="#link">
                               <img className="apies2__img" src={item.img} alt={item.title} width={378} height={378}/>
                               </a>
                                <h2 className="apies2__item__title">{item.title}</h2>
                               <span className="son">{item.son}</span>
                               <span className="son2">{item.son2}</span>
                               <button className="yurak__apies2">
                               <img  src={yurak} alt="logo" width={40} height={40}/>
                               </button>
                               <div className="Div__qoshimcha" ref={Ref}>
                                <button className="Div__qoshincha__btn">
                                    <img src={qayta} alt="logo" width={40} height={40}/>
                                </button>
                                <button className="Div__qoshincha__btn">
                                <img src={savat} alt="logo" width={40} height={40}/>
                                </button>
                               </div>
                            </li>
                            
                        ))
                    }
                    {
                         Api.map(item=>(
                            <li className="apies2__list__item454" key={item.id} onClick={ADD}>
                               <a className="apies2__list__item__link" href="#link">
                               <img className="apies2__img" src={item.img} alt={item.title} width={378} height={378}/>
                               </a>
                                <h2 className="apies2__item__title">{item.title}</h2>
                               <span className="son">{item.son}</span>
                               <span className="son2">{item.son2}</span>
                               <button className="yurak__apies2">
                               <img  src={yurak} alt="logo" width={40} height={40}/>
                               </button>
                               <div className="Div__qoshimcha" ref={Ref}>
                                <button className="Div__qoshincha__btn">
                                    <img src={qayta} alt="logo" width={40} height={40}/>
                                </button>
                                <button className="Div__qoshincha__btn">
                                <img src={savat} alt="logo" width={40} height={40}/>
                                </button>
                               </div>
                            </li>
                            
                        ))
                    }
                 {
                         Api.map(item=>(
                            <li className="apies2__list__item454" key={item.id} onClick={ADD}>
                               <a className="apies2__list__item__link" href="#link">
                               <img className="apies2__img" src={item.img} alt={item.title} width={378} height={378}/>
                               </a>
                                <h2 className="apies2__item__title">{item.title}</h2>
                               <span className="son">{item.son}</span>
                               <span className="son2">{item.son2}</span>
                               <button className="yurak__apies2">
                               <img  src={yurak} alt="logo" width={40} height={40}/>
                               </button>
                               <div className="Div__qoshimcha" ref={Ref}>
                                <button className="Div__qoshincha__btn">
                                    <img src={qayta} alt="logo" width={40} height={40}/>
                                </button>
                                <button className="Div__qoshincha__btn">
                                <img src={savat} alt="logo" width={40} height={40}/>
                                </button>
                               </div>
                            </li>
                            
                        ))
                    }
                        
                    </ul>
                    <button className="kaaata__list__btn">Показать Еще</button>
                    <Stack spacing={2} className="helloworld">
     
      <Pagination count={10} color="primary" />
  
    </Stack>
                </div>
            </section>

            <Input />
            <Footer />
        </>
    );
}

export { Katta__shop };