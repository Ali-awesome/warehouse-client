import React from 'react';

const Footer = () => {
    return (
        <div className='footer bg-dark d-flex justify-content-center mt-5 align-items-center fixed-bottom'>
            <h6 className='text-white text-center'><small>Copyright by Mohammad Sanullah</small><br /> <span>&copy;</span> {(new Date().getFullYear())}</h6>
        </div>
    );
};

export default Footer;