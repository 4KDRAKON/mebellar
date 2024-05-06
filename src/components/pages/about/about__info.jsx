import React from "react";
import Header from "../home/header/header"
import { About } from "./about/about";
import {Input} from "../home/input/input"
import Footer from "../home/footer/footer"
function About__info(){
    return(

        <>
        <Header />
        <About />
        <Input />
        <Footer />
        
        </>
    )
}
export {About__info}