import React from 'react';
import './Partners.css';
import img3 from './../../assets/img/partners/3.png';
import img4 from './../../assets/img/partners/4.png';
import img5 from './../../assets/img/partners/5.png';
import img6 from './../../assets/img/partners/6.png';
import img7 from './../../assets/img/partners/7.png';

export default function Partners() {
    return (
        <div id="client" className="client-area section-big">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2>OUR <span>PARTNERS</span></h2>
                            <p>This is caption text details This is caption text details. First bring all she'd brought creature doesn't above from may to fowl creepeth greater night make</p>
                        </div>
                    </div>
                </div>
                <div className="owl-client owl-carousel owl-theme part3">
                    <div className="owl-wrapper-outer autoHeight part1"><div className="owl-wrapper part4 d-flex mx-auto">
                        <div className="owl-item part2">
                        </div><div className="owl-item part2">
                        </div><div className="owl-item part2"><div className="item text-center">
                            <img src={img3} alt="" />
                        </div></div><div className="owl-item part2"><div className="item text-center">
                            <img src={img4} alt="" />
                        </div></div><div className="owl-item part2"><div className="item text-center">
                            <img src={img5} alt="" />
                        </div></div><div className="owl-item part2"><div className="item text-center">
                            <img src={img6} alt="" />
                        </div></div><div className="owl-item part2"><div className="item text-center">
                            <img src={img7} alt="" />
                        </div></div></div></div>
                </div>
            </div>
        </div>
    )
}
