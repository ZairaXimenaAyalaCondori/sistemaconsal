import React from 'react'
import './MainHeader.css';

export default function MainHeader() {
    return (
        <header>
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tcontact">
                                <ul>
                                    <li>
                                    <i class="bi bi-telephone-fill"></i><span>Call: </span>
                                        <a href="/">0123-12345-6789</a>
                                    </li>
                                    <li>
                                        <i class="bi bi-envelope-fill"></i>
                                        <span>Email: </span>
                                        <a href="/">admin@yourdomain.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tsocial">
                                <ul>
                                    <li><a href="/"><i className="bi bi-facebook mrbi"></i></a></li>
                                    <li><a href="/"><i className="bi bi-twitter mrbi"></i></a></li>
                                    <li><a href="/"><i className="bi bi-pinterest mrbi"></i></a></li>
                                    <li><a href="/"><i className="bi bi-google mrbi"></i></a></li>
                                    <li><a href="/"><i className="bi bi-linkedin mrbi"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
