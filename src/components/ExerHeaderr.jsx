import React, { Fragment } from "react";
import logo from './img/logo.png'

export const ExerHeader = () => {
    return(
        <Fragment>
            <header className="p-3 text-bg" style={{backgroundColor: "#000000" }}>
                <div className="container" >
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" >
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <img src={logo} className="bi me-2" width="80" height="50" role="img" aria-label="Bootstrap"></img>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href=".../public/ejercicio.html" className="nav-link px-2 text-white">Inicio</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Mis Rutinas</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}