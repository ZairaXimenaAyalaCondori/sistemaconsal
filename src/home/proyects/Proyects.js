import React from 'react'
import service1 from './../../assets/img/proyects/service1.jpeg';
import service2 from './../../assets/img/proyects/service2.jpeg';
import service3 from './../../assets/img/proyects/service3.jpeg';
import service4 from './../../assets/img/proyects/service4.jpeg';
import service5 from './../../assets/img/proyects/service5.jpg';
import service6 from './../../assets/img/proyects/service6.jpg';
import './Proyects.css';

export default function Proyects() {
    return (
        <section id="latest-project" className="latest-project-area section-big">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2>latest <span>projects</span></h2>
                            <p>This is caption text details This is caption text details.  First bring all she'd brought creature doesn't above from may to fowl creepeth greater, night make</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="news-carousel owl-carousel owl-theme pry1">
                        <div className="owl-wrapper-outer autoHeight pry2">
                            <div className="owl-wrapper pry3 d-flex flex-wrap"><div className="owl-item w346"><div className="project-item">
                            <div className="project-item-img">
                                <img src={service6} alt="" />
                            </div>
                            <div className="toplayer">
                                <div className="overlay">
                                    <div className="links">
                                        <h2 className="project-title"><a href="/">Portfolio title here</a></h2>
                                        <a href="/" className="work-popup"><span className="fa fa-search"></span></a>
                                        <a href="/"><span className="fa fa-link"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div></div><div className="owl-item w346"><div className="project-item">
                            <div className="project-item-img">
                                <img src={service1} alt="" />
                            </div>
                            <div className="toplayer">
                                <div className="overlay">
                                    <div className="links">
                                        <h2 className="project-title"><a href="/">Portfolio title here</a></h2>
                                        <a href="/" className="work-popup"><span className="fa fa-search"></span></a>
                                        <a href="/"><span className="fa fa-link"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div></div><div className="owl-item w346"><div className="project-item">
                            <div className="project-item-img">
                                <img src={service2} alt="" />
                            </div>
                            <div className="toplayer">
                                <div className="overlay">
                                    <div className="links">
                                        <h2 className="project-title"><a href="/">Portfolio title here</a></h2>
                                        <a href="/" className="work-popup"><span className="fa fa-search"></span></a>
                                        <a href="/"><span className="fa fa-link"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div></div><div className="owl-item w346"><div className="project-item">
                            <div className="project-item-img">
                                <img src={service3} alt="" />
                            </div>
                            <div className="toplayer">
                                <div className="overlay">
                                    <div className="links">
                                        <h2 className="project-title"><a href="/">Portfolio title here</a></h2>
                                        <a href="/" className="work-popup"><span className="fa fa-search"></span></a>
                                        <a href="/"><span className="fa fa-link"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div></div><div className="owl-item w346"><div className="project-item">
                            <div className="project-item-img">
                                <img src={service4} alt="" />
                            </div>
                            <div className="toplayer">
                                <div className="overlay">
                                    <div className="links">
                                        <h2 className="project-title"><a href="/">Portfolio title here</a></h2>
                                        <a href="/" className="work-popup"><span className="fa fa-search"></span></a>
                                        <a href="/"><span className="fa fa-link"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div></div><div className="owl-item w346"><div className="project-item">
                            <div className="project-item-img">
                                <img src={service5} alt="" />
                            </div>
                            <div className="toplayer">
                                <div className="overlay">
                                    <div className="links">
                                        <h2 className="project-title"><a href="/">Portfolio title here</a></h2>
                                        <a href="/" className="work-popup"><span className="fa fa-search"></span></a>
                                        <a href="/"><span className="fa fa-link"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div></div></div></div></div>
                </div>
            </div>
        </section>
    )
}
