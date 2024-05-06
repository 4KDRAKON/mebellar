import React from "react";
import Api from "../../../api/api1.json"
import "./shop__api.css"
import "../../home/apies/apies.css"
import T from "../../../lib/img/tayoqlar.svg"
import X from "../../../lib/img/x.svg"
import I from "../../../lib/img/imglar.svg"
function Apilr() {
  return (
    <>
      <section className="apies">
        <div className="container">
          <div className="teatttttlar">
            <h2 className="teatttttlar__title">Мебель для спальни</h2>
            <p className="teatttttlar__text">250 товара</p>
          </div>
          <ul className="apies">
            {Api.slice(0, 5).map(item => ( // Api.splice(0,1) o'rniga Api.slice(0,5) dan foydalaning
              <li key={item.id} className="api__item">
                <div className="api__div">
                  <h2 className="api__title">{item.title}</h2>
                  <p className="api__text">{item.son}</p>
                </div>
                <img className="img__api" src={item.img} alt="logo" width={256} height={225} />
              </li>

            ))}
            <li className="api__item__link">
              <a className="api__link2" href="#link">Показать все<svg width="14" height="10" viewBox="0 0 14 10" fill="#72BF44" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.857082 4.28572H11.5714L8.57137 1.28571C8.28565 1 8.28565 0.5 8.57137 0.214286C8.85708 -0.0714286 9.35708 -0.0714286 9.6428 0.214286L13.8571 4.42857C13.9285 4.57143 13.9999 4.78572 13.9999 5C13.9999 5.21429 13.9285 5.42857 13.7857 5.57143L9.57137 9.78571C9.28565 10.0714 8.78565 10.0714 8.49994 9.78571C8.21422 9.5 8.21422 9 8.49994 8.71429L11.4999 5.71429H0.785653C0.357082 5.71429 -6.10352e-05 5.42857 -6.10352e-05 5C0.0713675 4.57143 0.428511 4.28572 0.857082 4.28572Z" fill="#72BF44" />
              </svg>
              </a>
            </li>
          </ul>

          <div className="spalni__div">
            <div className="spalni__div1">


              <h2 className="spalni__div1__title">Сортировка</h2>
              <select className="spalni__div1__select">
                <option className="option__select" value="1">
                  по цене <img src={T} alt="logo" />
                 

                </option>
                <option className="option__select"  value="1">
                  по цене
                  <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.642859 0C0.287818 0 0 0.287818 0 0.642859C0 0.9979 0.287817 1.28572 0.642858 1.28572H12.2143C12.5694 1.28572 12.8572 0.9979 12.8572 0.642859C12.8572 0.287818 12.5694 0 12.2143 0H0.642859ZM2.57202 4.50004C2.57202 4.145 2.85984 3.85718 3.21488 3.85718H12.2149C12.5699 3.85718 12.8578 4.145 12.8578 4.50004C12.8578 4.85508 12.5699 5.14289 12.2149 5.14289H3.21488C2.85984 5.14289 2.57202 4.85508 2.57202 4.50004ZM5.14282 8.35721C5.14282 8.00217 5.43064 7.71436 5.78568 7.71436H12.2143C12.5693 7.71436 12.8571 8.00217 12.8571 8.35721C12.8571 8.71226 12.5693 9.00007 12.2143 9.00007H5.78568C5.43064 9.00007 5.14282 8.71226 5.14282 8.35721Z" fill="#383838" />
                  </svg>

                </option> 
                <option className="option__select"  value="1">
                  по цене
                  <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.642859 0C0.287818 0 0 0.287818 0 0.642859C0 0.9979 0.287817 1.28572 0.642858 1.28572H12.2143C12.5694 1.28572 12.8572 0.9979 12.8572 0.642859C12.8572 0.287818 12.5694 0 12.2143 0H0.642859ZM2.57202 4.50004C2.57202 4.145 2.85984 3.85718 3.21488 3.85718H12.2149C12.5699 3.85718 12.8578 4.145 12.8578 4.50004C12.8578 4.85508 12.5699 5.14289 12.2149 5.14289H3.21488C2.85984 5.14289 2.57202 4.85508 2.57202 4.50004ZM5.14282 8.35721C5.14282 8.00217 5.43064 7.71436 5.78568 7.71436H12.2143C12.5693 7.71436 12.8571 8.00217 12.8571 8.35721C12.8571 8.71226 12.5693 9.00007 12.2143 9.00007H5.78568C5.43064 9.00007 5.14282 8.71226 5.14282 8.35721Z" fill="#383838" />
                  </svg>

                </option> 
                <option className="option__select"  value="1">
                  по цене
                  <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.642859 0C0.287818 0 0 0.287818 0 0.642859C0 0.9979 0.287817 1.28572 0.642858 1.28572H12.2143C12.5694 1.28572 12.8572 0.9979 12.8572 0.642859C12.8572 0.287818 12.5694 0 12.2143 0H0.642859ZM2.57202 4.50004C2.57202 4.145 2.85984 3.85718 3.21488 3.85718H12.2149C12.5699 3.85718 12.8578 4.145 12.8578 4.50004C12.8578 4.85508 12.5699 5.14289 12.2149 5.14289H3.21488C2.85984 5.14289 2.57202 4.85508 2.57202 4.50004ZM5.14282 8.35721C5.14282 8.00217 5.43064 7.71436 5.78568 7.71436H12.2143C12.5693 7.71436 12.8571 8.00217 12.8571 8.35721C12.8571 8.71226 12.5693 9.00007 12.2143 9.00007H5.78568C5.43064 9.00007 5.14282 8.71226 5.14282 8.35721Z" fill="#383838" />
                  </svg>

                </option> 
              </select>
            
            
            </div>

            <div className="spalni__div2">
              <button className="spalni__div2__btn">
              Филтры  <img src={X} alt="logo"  width={16} height={17}/>

              </button>
             <a href="#link">
             <img src={I} alt="logo" />
             </a>
            </div>
          </div>


        </div>
      </section>

    </>
  )
}
export { Apilr }