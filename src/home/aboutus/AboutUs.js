import React from 'react';
import about from './../../assets/img/aboutus/about.jpg';
import './AboutUs.css';

export default function AboutUs() {
    return (
        <section id="about" className="about-area section-big">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-text">
                            <h2><span>ABOUT</span> US</h2>
                            <p>We are always try to do our best to server you of my entire soul like these sweet mornings of spring which enjoy with my whole heart. I am alone, and feel the charm I enjoy with my whole joy with my whole heart. I enjoy with my whole joy with my whole heart. They are very good I am alone, and we feel the charm of the charm.</p>
                            <p>We are always try to do our best to server you. Possession of my entire soul, like these entire soul like these sweet mornings of spring which enjoy. I enjoy with my whole joy with my whole heart.</p>
                            <a href="/" className="btn">Read more</a>
                        </div>
                    </div>
                    <div className="col-md-6 about-img">
                        <img src={about} alt="" />
                    </div>
                </div>
                <div className="row fun-fact-area">
                    <div className="col-sm-6 col-md-3 col-xs-6 col-xxs-12">
                        <div className="fun-fact tab-margin-bottom">
                            <i className="fa fa-heart-o"></i>
                            <h3><span className="cp-counter">5773</span></h3>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xs-6 col-xxs-12">
                        <div className="fun-fact tab-margin-bottom sm-no-border xs-no-border">
                            <i className="fa fa-check-square-o"></i>
                            <h3> <span className="cp-counter">5573</span></h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xs-6 col-xxs-12">
                        <div className="fun-fact">
                            <i className="fa fa-envelope-o"></i>
                            <h3> <span className="cp-counter">3756</span></h3>
                            <p>Mail Conversation</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xs-6 col-xxs-12">
                        <div className="fun-fact last">
                            <i className="fa fa-comment-o"></i>
                            <h3> <span className="cp-counter">3575</span></h3>
                            <p>Comments Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
