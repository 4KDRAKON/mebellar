import React from "react";
import Header from "../home/header/header"
import { Apilr } from "./shop__apies/shop__api";
import { Katta__shop } from "./katta__shop/katta__shop";

function Shop__info(){
    return(
        <>
        <Header />
        <Apilr />
        <Katta__shop />
        </>
    )
}

export {Shop__info}