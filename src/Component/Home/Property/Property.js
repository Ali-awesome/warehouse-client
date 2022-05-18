import React from 'react';
import { useNavigate } from 'react-router-dom';

const Property = ({ property }) => {
    const { name, url, description, price, supplier, id } = property;
    const navigate = useNavigate();

    const navigateToDetails = (id) => {
        navigate(`/inventory/${id}`)
    };
    return (
        <div className='col'>
            <div className="card h-100">
                <div className="card-body text-dark text-center">
                    <img src={url} className="card-img-top" alt="..."></img>
                    <h5 className="card-title">Name: {name}</h5>
                    <p><b>Price:</b> {price}</p>
                    <p className="card-text"><small>{description}</small></p>
                    <p>Supplier: {supplier}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button onClick={() => navigateToDetails(id)} className='btn btn-dark'>Update: {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Property;