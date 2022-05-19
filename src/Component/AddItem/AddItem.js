import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleAddItem = (event) => {
        event.preventDefault();
        const item = {
            email: user?.email,
            name: event.target.itemName.value,
            price: event.target.price.value,
            description: event.target.description.value,
            quantity: event.target.quantity.value,
            supplier: user?.displayName,
            url: event.target.image.value
        }
        fetch('http://localhost:5000/myItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Successfully added to Items')
                }
            });


    }
    return (
        <div className='addForm'>
            <h2>Add a new item in Inventory.</h2>
            <form onSubmit={handleAddItem}>
                <input type="text" name="itemName" id="" placeholder='Item Name' required />

                <input type="text" name="description" id="" placeholder='Enter Item Descripton' required />
                <input type="text" name="providerName" id="" value={user?.displayName} placeholder='Supplier Name' required readOnly disabled />

                <input type="email" name="email" id="" value={user?.email} placeholder='Enter your Email Address' required readOnly disabled />

                <input type="number" name="price" id="" placeholder='Enter Items Price' min={1} required />
                <input type="number" name="quantity" id="" placeholder='Stock Quatity' min={1} required />
                <input type="url" name="image" id="" placeholder='Photo Url' required />

                <input
                    className='warehouse border border-warning fs-5 w-50 mx-auto btn mt-2'
                    type="submit"
                    value="Add Item" />
            </form>

        </div>
    );
};

export default AddItem;