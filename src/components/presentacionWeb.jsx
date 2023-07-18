import React, { Fragment } from "react";
import logo from './img/logo.png'

export const Web = () => {
    return(
        <Fragment>
            <div className="container col-xxl-8 px-4 py-5" style={{backgroundColor: "#121212"}} >
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6"    >
                        <img src={logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>

                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-white lh-1 mb-3">ExerFit</h1>
                        <p className="lead text-white">Exerfit es una página dónde podrás encontrar diversas rutinas para entrenar en casa, también podrás seguir tus entrenamientos y guardar tus rutinas favoritas.</p>
                      
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
