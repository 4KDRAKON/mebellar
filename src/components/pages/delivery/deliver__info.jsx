import React from "react";
import { Deliver } from "./deliver/deliver";
import Header from "../home/header/header"
import Footer from "../home/footer/footer"
import {Input} from "../home/input/input"
function Deliver__info(){
    return(

        <>
        <Header />
        <Deliver />
        <Input />
        <Footer />
        
        </>
    )
}
export {Deliver__info}