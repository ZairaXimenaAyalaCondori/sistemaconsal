import React from 'react'
import srv1 from './../../assets/img/services/1.jpg';
import srv2 from './../../assets/img/services/2.jpg';
import srv3 from './../../assets/img/services/3.jpg';
import srv4 from './../../assets/img/services/4.jpg';
import srv5 from './../../assets/img/services/5.jpg';
import srv6 from './../../assets/img/services/6.jpg';
import './Services.css';

export default function Services() {
    return (
        <section id="service" className="service-area section-big">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>WHAT WE <span>DO</span></h2>
                            <p>This is caption text details This is caption text details. First bring all she'd brought creature doesn't above from may to fowl creepeth greater night make</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="pic-single-service">
                            <img src={srv1} alt="" className='w-100'/>
                                <a href="/"><h3>Fast Loading</h3></a>
                                <p>Coderspoint has everything you need to get your new website up and running in no time all</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="pic-single-service">
                            <img src={srv2} alt=""  className='w-100'/>
                                <a href="/"><h3>Easy to customize</h3></a>
                                <p>Coderspoint has everything you need to get your new website up and running in no time all</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="pic-single-service">
                            <img src={srv3} alt=""  className='w-100'/>
                                <a href="/"><h3>Responsive</h3></a>
                                <p>Coderspoint has everything you need to get your new website up and running in no time all</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="pic-single-service">
                            <img src={srv4} alt=""  className='w-100'/>
                                <a href="/"><h3>Creative Design</h3></a>
                                <p>Coderspoint has everything you need to get your new website up and running in no time all</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="pic-single-service">
                            <img src={srv5} alt=""  className='w-100'/>
                                <a href="/"><h3>24/7 Support</h3></a>
                                <p>Coderspoint has everything you need to get your new website up and running in no time all</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="pic-single-service">
                            <img src={srv6} alt=""  className='w-100'/>
                                <a href="/"><h3>Retina ready</h3></a>
                                <p>Coderspoint has everything you need to get your new website up and running in no time all</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
