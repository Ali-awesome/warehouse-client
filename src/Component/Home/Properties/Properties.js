import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import Property from '../Property/Property';
import Loading from '../../Shared/Loading/Loading';

const Properties = () => {
    const [items, setItems] = useItems();
    return (
        <div className='container'>
            <div id='properties'>
                <h1 className='text-center text-secondary my-5'>Furnitures</h1>
                <div className="properties-container row row-cols-1 row-cols-md-3 g-4">


                    {
                        items.length === 0 ? <Loading></Loading>
                            : items.slice(0, 6).map(item => <Property
                                key={item._id}
                                property={item}
                            >
                            </Property>)
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-dark text-center my-3'><Link className='text-decoration-none text-white ' to={'/all-items'} >Manage Inventory</Link></button>
            </div>
        </div>
    );

};

export default Properties;