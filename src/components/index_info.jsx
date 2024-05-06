import React from "react";
import Header from "./pages/home/header/header";
import Carousel from "./pages/home/hero/hero";
import { Apies } from "./pages/home/apies/apies";
import { Apies2 } from "./pages/home/apies2/apies";
import { Aksiya } from "./pages/home/aksiya/aksiya";
import { Kolleksiya } from "./pages/home/kolleksiya/kolleksiya";
import { Interses } from "./pages/home/interes/interes";
import { Input } from "../components/pages/home/input/input";
import Footer from "./pages/home/footer/footer";




function IndexInfo() {
  return (
    <>
      <Header />
      <Carousel />
      <Apies />
      <Apies2 />
      <Aksiya />
      <Kolleksiya />
      <Interses />
      <Input />
      <Footer />
    </>
  )
}


export default IndexInfo;

