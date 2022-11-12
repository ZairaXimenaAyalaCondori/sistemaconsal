import React from 'react';
import logo from './../assets/logo.png';
import blog1 from './../assets/img/blog/blog23-80x65.jpg';
import blog2 from './../assets/img/blog/blog234-80x65.jpg';
import './MainFooter.css';

export default function MainFooter() {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 ft-widget">
                        <img src={logo} alt="" />
                            <p>Firmament whales which greater two wherein likeness light behold light that was. Firmament whales which greater two wherein likeness light behold light that was.</p>
                    </div>
                    <div className="col-md-3 col-sm-6 ft-widget">
                        <h4>RECENT POSTS</h4>
                        <div className="recent-post clearfix">
                            <img src={blog1} alt="" />
                                <a href="/">Placeat facilis quidem rerum</a>
                                <img src={blog2} alt="" />
                                    <a href="/">Etharums  quidem rerum facilis</a>
                                </div>
                        </div>
                        <div className="col-md-3 col-sm-6 ft-widget">
                            <h4>POPULAR TAGS</h4>
                            <ul className="q-link">
                                <li><a href="/">Agency</a></li>
                                <li><a href="/">Clean</a></li>
                                <li><a href="/">Computer</a></li>
                                <li><a href="/">Corporate</a></li>
                                <li><a href="/">Design</a></li>
                                <li><a href="/">Techonology</a></li>
                                <li><a href="/">Theme</a></li>
                                <li><a href="/">Video</a></li>
                                <li><a href="/">Wordpress</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 ft-widget">
                            <h4>CONTACT US</h4>
                            <div className="footer-contact">
                                <p><i className="bi bi-geo-alt-fill"></i> 7503 Wakehurst St, Perrysburg 43551
                                </p>
                                <p><i className="bi bi-phone"></i> <a href="tel:0123456789">+00 123-456-789</a></p>
                                <p><i className="bi bi-phone"></i><a href="mailto:admin@domain.com">email@yourdomain.com</a></p>
                                <p><i className="bi bi-globe"></i> <a href="/">www.your@domain.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    )
}
