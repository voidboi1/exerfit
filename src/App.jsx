import React, { Fragment, useState } from "react";

import { ExerHeader } from "./components/ExerHeaderr"

import { CartasEjercicios } from "./components/cartasEjercicios"

import { Web } from "./components/presentacionWeb"


export const App = () => {
    
    
    return(
        <Fragment>
            
            <ExerHeader />

            <Web />

            <CartasEjercicios />

        </Fragment>
    )
    
}