import React from 'react';
import blog1 from './../../assets/img/blog/blog1.jpg';
import blog2 from './../../assets/img/blog/blog2.jpg';
import blog3 from './../../assets/img/blog/blog3.jpg';
import './Blog.css';

export default function Blog() {
    return (
        <section id="blog" className="blog-area section-small">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>LATEST FROM <span>BLOG</span></h2>
                            <p>This is caption text details This is caption text details. First bring all she'd brought creature doesn't above from may to fowl creepeth greater night make</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="single-blog">
                            <div className="blog-image">
                                <a href="/">
                                    <img src={blog1} alt="" />
                                </a>
                                <p className="blog-meta">
                                    <span>By <a href="/">Admin</a></span>
                                    <span>January 12, 2018</span>
                                    <span><a href="/">3 Comment</a></span>
                                </p>
                            </div>
                            <div className="blog-content">
                                <a href="/">
                                    <h3>Etharums facilis quidem rerum</h3>
                                </a>
                                <p>But I must explain to you how all this mistaken idea of pleasure and praising pain was born and I will give you a complete account of the system, and</p>
                                <a className="blog-btn" href="/">Read More <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="single-blog">
                            <div className="blog-image">
                                <a href="/">
                                    <img src={blog2} alt="" />
                                </a>
                                <p className="blog-meta">
                                    <span>By <a href="/">Admin</a></span>
                                    <span>January 14, 2018</span>
                                    <span><a href="/">3 Comment</a></span>
                                </p>
                            </div>
                            <div className="blog-content">
                                <a href="/">
                                    <h3>Placeat quidem rerum facilis</h3>
                                </a>
                                <p>But I must explain to you how all this mistaken idea of pleasure and praising pain was born and I will give you a complete account of the system, and</p>
                                <a className="blog-btn" href="/">Read More <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="single-blog">
                            <div className="blog-image">
                                <a href="/">
                                    <img src={blog3} alt="" />
                                </a>
                                <p className="blog-meta">
                                    <span>By <a href="/">Admin</a></span>
                                    <span>January 14, 2018</span>
                                    <span><a href="/">3 Comment</a></span>
                                </p>
                            </div>
                            <div className="blog-content">
                                <a href="/">
                                    <h3>Winged signs void Earth forth</h3>
                                </a>
                                <p>But I must explain to you how all this mistaken idea of pleasure and praising pain was born and I will give you a complete account of the system, and</p>
                                <a className="blog-btn" href="/">Read More <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
