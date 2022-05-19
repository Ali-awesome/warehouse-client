import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Property.css'

const Property = ({ property }) => {
    const { name, url, description, price, quantity, supplier, _id } = property;
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const navigateToDetails = (_id) => {
        navigate(`/inventory/${_id}`)
    };

    const addToMyItems = ({ property }) => {
        const email = user?.email;
        // property.email = email;
        // console.log(property);
        const myItem = { ...property, email: email };
        console.log(myItem);
        fetch('http://localhost:5000/myItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(myItem),
        })
            .then(res => res.json())
            .then(data => console.log(data));

    }
    return (
        <div className='col item'>
            <div className="card h-100">
                <div className="card-body text-dark text-center">
                    <img src={url} className="image card-img-top" alt="..."></img>
                    <h5 className="card-title">Name: {name}</h5>
                    <p className='m-0'><b>Price:</b> {price}</p>
                    <p className='m-0'><b>Quantity:</b> {quantity}</p>
                    <p className="m-0"><small>{description}</small></p>
                    <p><b>Supplier:</b> {supplier}</p>
                    <div>
                        <button onClick={() => addToMyItems({ property })} className='mb-2 btn btn-dark'>Add to My Items</button>
                        <button onClick={() => navigateToDetails(_id)} className='btn btn-dark'>Update: {name}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;