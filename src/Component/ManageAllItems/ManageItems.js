import React from 'react';
import { toast } from 'react-toastify';
import useItems from '../Hooks/useItems';

const ManageItems = ({ property }) => {
    const [items, setItems] = useItems();
    const { name, url, description, price, supplier, quantity, _id } = property;
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
                        <button onClick={() => handleDelete(_id)} className='mb-2 btn btn-dark'>Delete This Item</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;