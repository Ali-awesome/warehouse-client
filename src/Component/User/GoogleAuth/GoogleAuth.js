import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const GoogleAuth = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div className='m-0'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn text-secondary border border-info rounded w-75 d-block mx-auto my-1'>
                    <img style={{ width: '30px' }} src='https://i.postimg.cc/5yDQnG15/google.png' alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default GoogleAuth;