import React, { useEffect, useState } from 'react'
import './MainBanner.css';
import { ApiWebURL, ApiWebURL2 } from '../../utils';
import firstbanner from './../../assets/firstbanner.jpg';

export default function MainBanner() {

  const [listaBanners, setListaBanners] = useState([]);

  useEffect(() => {
    leerServicio();
  }, [])

  const leerServicio = () => {
    const rutaServicio = ApiWebURL + "banner.php";
    fetch(rutaServicio)
      .then(response => response.json())
      .then(data => {
        setListaBanners(data);
      });
  }


  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
      <div className="carousel-indicators buttons">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={firstbanner} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='titleBanner'>We are your friends</h5>
            <p>Cheer up to be part of the Consal experience, you can't miss it</p>
            <a href="/" className="btn">Learn More</a>
            <a href="/" className="btn btn-trnsp">Contact</a>
          </div>
        </div>
        {listaBanners.map(item =>
          <div className="carousel-item" key={item.id}>
            <img src={ApiWebURL2 + "fotos/" + item.imagen} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='titleBanner'>{item.titulo}</h5>
              <p>{item.texto}</p>
              <a href="/" className="btn">Learn More</a>
              <a href="/" className="btn btn-trnsp">Contact</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
