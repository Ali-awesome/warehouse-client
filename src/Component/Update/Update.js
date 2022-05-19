import { Link, useParams } from 'react-router-dom';
import useItemsById from '../Hooks/useItemsById';

const Update = () => {
    const { itemId } = useParams();
    const [itemsById] = useItemsById(itemId);
    console.log(itemsById);



    return (
        <div>
            <h2>Update this Item.{itemId}</h2>
            <h3>{itemsById.name}</h3>

            <div className='d-flex justify-content-center'>
                <button className='btn btn-dark text-center my-3'><Link className='text-decoration-none text-white ' to={'/all-items'} >Manage Inventory</Link></button>
            </div>
        </div>
    );
};

export default Update;