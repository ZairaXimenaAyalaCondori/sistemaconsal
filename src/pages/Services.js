import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ApiWebURL, ApiWebURL2 } from '../utils';
import './Services.css';
import Employees from './Employees.js'

export default function Team() {

  const [listaServicios, setListaServicios] = useState([]);
  const [servicioSeleccionado, setServicioSeleccionado] = useState([]);

  useEffect(() => {
    leerServicio();
  }, [])

  const leerServicio = () => {
    const rutaServicio = ApiWebURL + "servicio.php";
    fetch(rutaServicio)
      .then(response => response.json())
      .then(data => {
        setListaServicios(data);
      });
  }

  const seleccionarServicio = (event, item) => {
    setServicioSeleccionado(item);
    event.currentTarget.classList.add("active");
  }

  return (
    <>
      <section className="page-title section-big">
        <div className="container">
          <h2>SERVICES</h2>
          <ul className="d-flex">
            <li><Link className="tohome" to="/">Home</Link></li>
            <li><i class="bi bi-chevron-right"></i></li>
            <li>Services</li>
          </ul>
        </div>
      </section>

      <section className="works section-big">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2>Our <span>services</span></h2>
                <p>Presentamos todos los servicios que podemos realizar, seleccione una categoria para ver la lista del equipo de empleados que trabajan en cada area.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='container row mx-auto'>
          <div className="row row-cols-1 row-cols-md-2 g-4 col w-50">
            {listaServicios.map(item =>
              <div className="col" key={item.id}
                onClick={(event) => seleccionarServicio(event, item)}>                
                <div className="card text-center h-100">
                  <img src={ApiWebURL2 + "fotos/" + item.imagen} className="card-img-top stylecard" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title text-uppercase fs-5">{item.nombre}</h6>
                    <p className="card-text">{item.descripcion}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='col w-50'>
              <h3 className='pt-5 text-uppercase fw-bolder'>{servicioSeleccionado.nombre}</h3>
              <p>{servicioSeleccionado.descripcion}</p>
              <Employees  servicioEmpleados = {servicioSeleccionado.id} />
          </div>
        </div>
      </section>
    </>
  )
}
