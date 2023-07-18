import React, { Fragment, useState } from "react";
import presentacionEjercicios from "./mocks/ejercicios.json";
import cardio from './img/cardio.jpg'



export function CartasEjercicios () {

  const { ejercicios } = presentacionEjercicios;
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState([]);
 
  const agregarCarta = (rutina) => {
    setCartasSeleccionadas([...cartasSeleccionadas, rutina]);
  };
  const eliminarCarta = (id) => {
    const nuevasCartas = cartasSeleccionadas.filter((rutina) => rutina.id !== id);
    setCartasSeleccionadas([...nuevasCartas]);
  };
  
  return (
    <div>
        <div className='container border-primary rounded-pill text-center border'>
            
            <div className='row justify-content-center"'>
                <div className="col">
                    <h1 className='display-6 fw-bold text-white text-center'>Rutinas de Ejercicio</h1>
                </div>
            </div>
            
        </div>
      <div className='album py-5 bg-body-dark'>
    <div className='ejercicios'>
        <ul>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> 
                {ejercicios.map((rutina => (
                    
                        <li key={rutina.id}>
                        <div  className='col'>
                            <div className="card border-primary">
                                <img src={ cardio } width="100%"    className="card-img-top" alt="" />
                                <div className='card-body bg-dark'>
                                    <h5 className='card-title text-white'>{rutina.nombre}</h5>
                                    <p className='card-text text-white'>{rutina.descripcion}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className='btn-group'>
                                            
                                            <button   type="button" className="btn btn-sm btn-outline-warning">Agregar</button> 
                                            <button type="button" className="btn btn-sm btn-outline-warning" onClick={() => agregarCarta(rutina)}>Agregar</button>              
                                        </div>
                                    </div>
        
                                </div>
                            </div>

                        </div>
                        </li>
                    
                )))}
            </div>
        </ul>

    </div>

    <div className='container border-primary rounded-pill text-center border my-5'>
            
            <div className='row justify-content-center"'>
                <div className="col">
                    <h1 className='display-6 fw-bold text-white text-center'>Mis rutinas</h1>
                </div>
            </div>
            
        </div>

    </div>

  <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
    {cartasSeleccionadas.map((rutina) => (
      <div key={rutina.id} className='col'>
        <div className='card border-primary'>
          <img src={rutina.imagen} width='100%' className='card-img-top' alt='' />
          <div className='card-body bg-dark'>
            <h5 className='card-title text-white'>{rutina.nombre}</h5>
            <p className='card-text text-white'>{rutina.id}</p>
            <p className='card-text text-white'>{rutina.descripcion}</p>
            <p className='card-text text-white'>{rutina.ejerciciosa}</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='btn-group'>
              <button type='button' className='btn btn-sm btn-outline-danger' onClick={() => eliminarCarta(rutina.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    
     

      
    
  );
}


  











