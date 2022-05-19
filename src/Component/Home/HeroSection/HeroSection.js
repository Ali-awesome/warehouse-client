import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide hero" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='https://i.postimg.cc/MHr3ypFc/hero-1.jpg' className="image d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block mb-5">
                            <h5 className='fs-1'>Get your dream and LIVE it.</h5>
                            <p className='fs-3'>Stay with us to get the best and let us take you to the best.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src='https://i.postimg.cc/SsSg3902/hero-2.jpg' className="image d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block mb-5">
                            <h5 className='fs-1'>Get your dream and LIVE it.</h5>
                            <p className='fs-3'>Stay with us to get the best and let us take you to the best.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;