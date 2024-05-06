
import './App.css';
import { Fav__info } from './components/pages/favourite/favourite.info';
import { Zak__info } from './components/pages/zakaz/zakaz.info';
import { About__info } from './components/pages/about/about__info';
import { Deliver__info } from './components/pages/delivery/deliver__info';
import { Contact__info } from './components/pages/contact/contact__info';
import { Section__info } from './components/pages/product/product.info';
import IndexInfo from './components/index_info';
import { Shop__info } from './components/pages/shop/shop__info';
import { Routes, Route } from "react-router-dom";
import Product from "./components/pages/product/product.info"
function App() {
  return (
    <>
          <Routes>
          <Route path="/" element={<IndexInfo />} />
          <Route path="/Shop__info" element={<Shop__info />} />

          <Route path="/Shop__info" element={<Shop__info />} />
          <Route path="/Section__info" element={<Section__info />} />
          <Route path="/Contact__info" element={<Contact__info />} />
          <Route path="/About__info" element={<About__info />} />
          <Route path="/Fav__info" element={<Fav__info />} />
          <Route path="/Zakaz" element={<Zak__info />} />
          <Route path="/Product" element={<Section__info />} />
          
          </Routes>








      {/* <IndexInfo />
      <Shop__info />
      <Section__info />
      <Contact__info />
      <About__info />
      <Deliver__info />
      <Fav__info />
      <Zak__info /> */}
    </>
  );
}

export default App;
