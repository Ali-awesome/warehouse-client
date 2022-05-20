import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './MyItem.css'
import { toast } from 'react-toastify';

const MyItem = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/myItems?email=${email}`;
        const myItem = () => {
            try {
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setMyItems(data)
                    });
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        myItem();
    }, [user]);



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
                    const remaining = myItems.filter(item => item._id !== id);
                    if (data.deletedCount === 1) {
                        setMyItems(remaining);
                        toast('Item Deleted Successfully!');
                    }
                });
        };
    }
    return (
        <div>
            <h2 className='warehouse fs-1'>You heve {myItems.length} items.</h2>
            <div className='row container mb-5'>
                {
                    myItems.map(item => <div className='col-4 item mb-2' key={item._id}>
                        <div className="card h-100">
                            <div className="card-body text-dark text-center">
                                <img src={item.url} className="image card-img-top" alt="..."></img>
                                <h5 className="card-title">Name: {item.name}</h5>
                                <p className='m-0'><b>Price:</b> {item.price}</p>
                                <p className="m-0"><small>{item.description}</small></p>
                                <div>
                                    <button onClick={() => handleDelete(item._id)} className='mb-2 btn btn-dark'>Delete This Item</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItem;