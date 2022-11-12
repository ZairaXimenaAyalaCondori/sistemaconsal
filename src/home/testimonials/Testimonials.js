import React from 'react'
import img1 from './../../assets/img/testimonials/1.jpg';
import img2 from './../../assets/img/testimonials/2.jpg';
import './Testimonials.css';

export default function Testimonials() {
    return (
        <section id="testimonial" className="testimonial-area section-big">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2>CLIENT <span>TESTIMONIAL</span></h2>
                            <p>This is caption text details This is caption text details. First bring all she'd brought creature
                                doesn't above from may to fowl creepeth greater night make</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="testimonial-list owl-carousel owl-theme style1">
                            <div className="owl-wrapper-outer autoHeight style2">
                                <div className="owl-wrapper test2 d-flex flex-wrap">
                                    <div className="owl-item test1">
                                        <div className="single-testimonial">
                                            <div className="test-meta">
                                                <img src={img1} alt="" />
                                            </div>
                                            <p><i className="bi bi-quote"></i>Serenity has taken possession of my entire soul
                                                these sweet morning of spring which I enjoy of spring which I enjoy with my
                                                whole heart.</p>
                                            <h4>- Jone Doe</h4>
                                        </div>
                                    </div>
                                    <div className="owl-item test1">
                                        <div className="single-testimonial">
                                            <div className="test-meta">
                                                <img src={img2} alt="" />
                                            </div>
                                            <p><i className="bi bi-quote"></i>Serenity has taken possession of my entire soul
                                                these sweet morning of spring which I enjoy of spring which I enjoy with my
                                                whole heart.</p>
                                            <h4>- Tom Harry</h4>
                                        </div>
                                    </div>
                                    <div className="owl-item test1">
                                        <div className="single-testimonial">
                                            <div className="test-meta">
                                                <img src={img1} alt="" />
                                            </div>
                                            <p><i className="bi bi-quote"></i>Serenity has taken possession of my entire soul
                                                these sweet morning of spring which I enjoy of spring which I enjoy with my
                                                whole heart.</p>
                                            <h4>- Michael Jackson</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
