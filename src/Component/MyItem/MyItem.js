import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {

    }, [user])
    return (
        <div>
            <h2>my items</h2>
        </div>
    );
};

export default MyItem;