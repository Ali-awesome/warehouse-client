import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemsById from '../Hooks/useItemsById';
import './Update.css'

const Update = () => {
    const { itemId } = useParams();
    const [itemsById, setItemsById] = useItemsById(itemId);

    // console.log(itemsById);

    const [stock, setStock] = useState(0);

    const stockValue = event => {
        setStock(parseInt(event.target.value))
    }
    const handleSubmit = async (state) => {
        if (state) {
            itemsById.quantity = parseInt(itemsById.quantity) + stock


        } else {
            itemsById.quantity = parseInt(itemsById.quantity) - 1
        }
        const { _id, ...result } = itemsById;


        await fetch(`http://localhost:5000/inventory/${itemId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        }
        )
            .then(res => res.json())
            .then(res => setItemsById(res))
    }

    const handleForm = event => {
        event.preventDefault()
        event.target.reset()
    }


    return (
        <div className='container'>
            <h2 className='warehouse fs-1'>Update {itemsById.name}.</h2>
            <form onSubmit={handleForm} className='text-center restock text-dark mb-3 border w-50 mx-auto border-dark rounded'>
                <h3>Restock item.</h3>
                <input onChange={stockValue} className='mb-2' name='restock' type="number" placeholder='Enter restocking quantity!' max='100' min='0' />
                <button onClick={() => handleSubmit(true)} type='submit' className='btn btn-dark ms-2 mb-2 text-white'>ReStock</button>
            </form>

            <div className="update w-50 mx-auto card mb-3">
                <img src={itemsById.url} className="image card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Name: {itemsById.name}</h5>
                    <h5 className="card-title">Id: {itemId}</h5>
                    <p className='m-0'><b>Price:</b> {itemsById.price}</p>
                    <p className='m-0'><b>Quantity:</b> {itemsById.quantity}</p>
                    <p className="m-0"><small>{itemsById.description}</small></p>
                    <p><b>Supplier:</b> {itemsById.supplier}</p>
                    <button onClick={() => {
                        handleSubmit(false)
                    }} className='btn btn-dark text-white'>Delivered</button>
                </div>
            </div>

            <div className='d-flex justify-content-center mb-5'>
                <button className='btn btn-dark text-center my-3'><Link className='text-decoration-none text-white ' to={'/all-items'} >Manage Inventory</Link></button>
            </div>
        </div>
    );
};

export default Update;