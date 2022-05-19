import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../Hooks/useItems';
import ManageItems from './ManageItems';

const ManageAllItems = () => {
    const [items] = useItems();
    return (
        <div className='container'>
            <h2 className='warehouse text-center fs-1'>Inventory Section</h2>
            <button className='mb-2 btn btn-dark'><Link className='text-decoration-none text-cemter text-white' to={'/add-items'}>Add Items</Link></button>
            <div id='items'>
                <div className="properties-container row row-cols-1 row-cols-md-3 g-4">
                    {
                        items.map(item => <ManageItems
                            key={item._id}
                            property={item}
                        >
                        </ManageItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageAllItems;