import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { itemId, name, img } = useParams();


    return (
        <div>
            <h2>Update this Item.{itemId}</h2>
            <h3>{name}</h3>


        </div>
    );
};

export default Update;