import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useItems from '../Hooks/useItems';

const ManageAllItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useItems();
    const handleDelete = id => {
        const confirmation = window.confirm('Are you sure?');
        if (confirmation) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    if (data.deletedCount === 1) {
                        setItems(remaining);
                        toast('Item Deleted Successfully!');
                    }
                });
        };
    }
    const navigate = useNavigate();


    const navigateToInventory = (_id) => {
        navigate(`/inventory/${_id}`)
    };

    return (
        <div className='container mb-5'>
            <h2 className='warehouse text-center fs-1'>Inventory Section</h2>
            <button className='mb-2 btn btn-dark'><Link className='text-decoration-none text-cemter text-white' to={'/add-items'}>Add Items</Link></button>
            <div id='items'>
                <div className="properties-container row row-cols-1 row-cols-md-3 g-4">
                    {
                        items.map(item => <div key={item._id} className='col item'>
                            <div className="card h-100">
                                <div className="card-body text-dark text-center">
                                    <img src={item.url} className="image card-img-top" alt="..."></img>
                                    <h5 className="card-title">Name: {item.name}</h5>
                                    <p className='m-0'><b>Price:</b> ${item.price}</p>
                                    <p className='m-0'><b>Quantity:</b> {item.quantity}</p>
                                    <p className="m-0"><small>{item.description}</small></p>
                                    <p className="m-0">Supplier: {item.supplier}</p>
                                    <p className="m-0">email: {item.supplierEmail}</p>
                                    {user?.email !== item.supplierEmail &&
                                        <div className='mt-2'>
                                            <button onClick={() => navigateToInventory(item._id)} className='btn btn-dark mb-2'>Update: {item.name}</button>
                                            <p className='text-danger'>You Can Only Delete Your Own Item!</p>
                                        </div>

                                    }

                                    {user?.email === item.supplierEmail &&
                                        <div className='mt-2'>
                                            <button onClick={() => navigateToInventory(item._id)} className='btn btn-dark me-2'>Update: {item.name}</button>
                                            <button onClick={() => handleDelete(item._id)} className=' btn btn-dark'>Delete This Item</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageAllItems;