import React, { useEffect, useState } from 'react';
import Property from '../Property/Property';

const Properties = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='container'>
            <div id='properties'>
                <h1 className='text-center text-secondary my-5'>Avenues</h1>
                <div className="properties-container row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.slice(0, 6).map(service => <Property
                            key={service.id}
                            property={service}
                        >
                        </Property>)
                    }
                </div>
            </div>
        </div>
    );

};

export default Properties;