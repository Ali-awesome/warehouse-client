import React from 'react';
import useItems from '../Hooks/useItems';
import ManageItems from './ManageItems';

const ManageAllItems = () => {
    const [items] = useItems();
    return (
        <div className='container'>
            <h2 className='warehouse text-center fs-1'>Inventory Section</h2>
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