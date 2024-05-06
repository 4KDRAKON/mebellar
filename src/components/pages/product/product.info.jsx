import React from "react";
import { Section1 } from "./section1/section1";
import Header from "../home/header/header"
import { Section2 } from "./section2/section2";
import {Input}  from "../home/input/input" 
import Footer from "../home/footer/footer"
function Section__info(){
    return(
        <>
        <Header />
        <Section1 />
        <Section2 />
        <Input />
        <Footer />
        </>
    )
}

export {Section__info}