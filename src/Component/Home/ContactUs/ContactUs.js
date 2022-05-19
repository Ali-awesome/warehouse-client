import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    const handleSubmit = event => {
        event.target.reset();

        event.preventDefault();
    }
    return (
        <div id='contact'>
            <section className="site-section bg-light bg-image" id="contact-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2 className="section-title text-secondary mb-3">Contact Us</h2>
                        </div>
                    </div>
                    <div className="row text-start">
                        <div className="col-md-7 mb-5">
                            <form onSubmit={handleSubmit} action="#" className="p-5 bg-white">
                                <h2 className="h4 text-black mb-5">Get In Touch</h2>
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="text-black my-2">Full Name</label>
                                        <input type="text" name='name' id="fname" className="form-control" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black my-2">Email</label>
                                        <input type="email" name='email' id="email" className="form-control" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black my-2">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="7" className="form-control"
                                            placeholder="Write your notes or questions here..."></textarea>
                                    </div>
                                </div>

                                <div className="row form-group my-2">
                                    <div className="col-md-12">
                                        <input type="submit" value="Send Message" className="submit-button btn btn-md text-white" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5">
                            <div className="p-4 mb-3 bg-white">
                                <p className="mb-0 font-weight-bold">Address</p>
                                <p className="mb-4">ToTo Company Road, Bangladesh.</p>

                                <p className="mb-0 font-weight-bold">Cell</p>
                                <p className="mb-4"><a>+880 1786287935</a></p>

                                <p className="mb-0 font-weight-bold">Email Address</p>
                                <p className="mb-0"><a href='#'>hellomellio@zmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;