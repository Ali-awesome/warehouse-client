import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Property.css'

const Property = ({ property }) => {
    const { name, url, description, price, quantity, supplier, _id } = property;
    const navigate = useNavigate();


    const navigateToInventory = (_id) => {
        navigate(`/inventory/${_id}`)
    };

    return (
        <div className='col item'>
            <div className="card h-100">
                <div className="card-body text-dark text-center">
                    <img src={url} className="image card-img-top" alt="..."></img>
                    <h5 className="card-title">Name: {name}</h5>
                    <p className='m-0'><b>Price:</b> ${price}</p>
                    <p className='m-0'><b>Quantity:</b> {quantity}</p>
                    <p className="m-0"><small>{description}</small></p>
                    <p><b>Supplier:</b> {supplier}</p>
                    <div>
                        <button onClick={() => navigateToInventory(_id)} className='btn btn-dark'>Update: {name}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;