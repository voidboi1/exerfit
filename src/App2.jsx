import React, { Fragment, useState } from "react";

import { ExerHeader } from "./components/ExerHeaderr"

import { CartasEjercicios } from "./components/cartasEjercicios"

import { Web } from "./components/presentacionWeb"

import presentacionEjercicios from "./components/mocks/ejercicios.json"


export const App2 = () => {
    const { ejercicios } = presentacionEjercicios
    const [filters, setFilters] = useState({
        category: "cardio"
    })
    
    const filterRutinas = (ejercicios) => {
        return ejercicios.filter(rutina => {
            return(
                rutina.categoria === filters.category
            )
        })
    }

    const filteredRutinas = filterRutinas(ejercicios)
    return(
        <Fragment>
            

            <CartasEjercicios ejercicios = {filteredRutinas}  />


        </Fragment>
    )
    
}