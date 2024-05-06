import React from "react";
import Api from "../../../api/api1.json"
import "./apies.css"
// import Logo from "../../../lib/img/Vector.svg"
function Apies() {
  // const Res = Api.splice(0,5)
  return (
    <>
     <section className="apies">
      <div className="container">
      <ul className="apies">
        {Api.map(item => (
          <li key={item.id} className="api__item"> 
            <div className="api__div">
            <h2 className="api__title">{item.title}</h2>
            <p className="api__text">{item.son}</p>
            </div>
            <img className="img__api" src={item.img} alt="logo" width={256} height={225} />
          </li>
        ))}
      </ul>

      <ul className="apies">
        {Api.map(item => (
          <li key={item.id} className="api__item"> 
            <div className="api__div">
            <h2 className="api__title">{item.title}</h2>
            <p className="api__text">{item.son}</p>
            </div>
            <img className="img__api" src={item.img} alt="logo" width={256} height={225} />
          </li>
        ))}

          

      </ul>
      <a className="api__link" href="#link">Показать все<svg width="14" height="10" viewBox="0 0 14 10" fill="#72BF44" xmlns="http://www.w3.org/2000/svg">
<path d="M0.857082 4.28572H11.5714L8.57137 1.28571C8.28565 1 8.28565 0.5 8.57137 0.214286C8.85708 -0.0714286 9.35708 -0.0714286 9.6428 0.214286L13.8571 4.42857C13.9285 4.57143 13.9999 4.78572 13.9999 5C13.9999 5.21429 13.9285 5.42857 13.7857 5.57143L9.57137 9.78571C9.28565 10.0714 8.78565 10.0714 8.49994 9.78571C8.21422 9.5 8.21422 9 8.49994 8.71429L11.4999 5.71429H0.785653C0.357082 5.71429 -6.10352e-05 5.42857 -6.10352e-05 5C0.0713675 4.57143 0.428511 4.28572 0.857082 4.28572Z" fill="#72BF44"/>
</svg>
</a>
     
      </div>
     </section>
    </>
  );
}

export { Apies };