import React from 'react';
import './HowItWorks.css';
import '../../../flaticon/font/flaticon.css'

const HowItWorks = () => {
    return (
        <div className='howitworks'>
            <section className="py-5 site-section how-it-works" id="howitworks-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-7 text-center">
                            <h2 className="section-title mb-3 text-black">How It Works</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="pr-5 first-step">
                                <span className="text-black">01.</span>
                                <span className="custom-icon flaticon-house text-black"></span>
                                <h3 className="text-black">Find Property.</h3>
                                <p className="text-black">what suits you the best.</p>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="pr-5 second-step">
                                <span className="text-black">02.</span>
                                <span className="custom-icon flaticon-coin text-black"></span>
                                <h3 className="text-dark">Buy Property.</h3>
                                <p className="text-black">Within your budget and worthy of it.</p>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="pr-5">
                                <span className="text-black">03.</span>
                                <span className="custom-icon flaticon-home text-black"></span>
                                <h3 className="text-dark">Outstanding Houses.</h3>
                                <p className="text-black">Home sweet home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;