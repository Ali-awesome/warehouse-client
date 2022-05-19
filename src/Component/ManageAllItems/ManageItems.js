import React from 'react';

const ManageItems = ({ property }) => {
    const { name, url, description, price, supplier, _id } = property;
    return (
        <div className='col item'>
            <div className="card h-100">
                <div className="card-body text-dark text-center">
                    <img src={url} className="image card-img-top" alt="..."></img>
                    <h5 className="card-title">Name: {name}</h5>
                    {/* <div>
                        <button onClick={() => navigateToDetails()} className='mb-2 btn btn-dark'>Add: {name}</button>
                        <button onClick={() => navigateToDetails(_id)} className='btn btn-dark'>Update: {name}</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ManageItems;