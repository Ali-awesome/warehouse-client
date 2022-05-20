import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
// import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import GoogleAuth from '../GoogleAuth/GoogleAuth';
import useJWT from '../../Hooks/useJWT';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const [token] = useJWT(user);
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/home');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm = event.target.confirmPassword.value

        // const agree = event.target.terms.checked;
        if (password === confirm) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            // navigate('/home');
            event.target.reset();
        }
        else {
            toast('Password did not match!');
            event.target.reset();
            setAgree(!agree);
        }

    }

    return (
        <div className='register-form container w-50 mx-auto d-flex mb-5'>
            <div className='w-50 pt-5'>
                <img className='img-fluid' src="https://i.postimg.cc/cJbZ81r9/login.png" alt="" />
            </div>
            <div className='w-50 border border-warning rounded p-3 ms-3 mb-5'>
                <h2 className='text-secondary fs-2 text-center mt-2'>Register to Enter.</h2>
                <button type="button" className="btn border border-warning mb-2"><Link to="/login" className='warehouse p-2 text-decoration-none' onClick={navigateToLogin}>I have an account!</Link></button>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your Name' />

                    <input type="email" name="email" id="" placeholder='Enter your Email Address' required />

                    <input type="password" name="password" id="" placeholder='Choose Password' required />
                    <input type="password" name="confirmPassword" id="" placeholder='Confirm Password' required />
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions?</label>
                    <input
                        disabled={!agree}
                        className='warehouse border border-warning fs-5 w-50 mx-auto btn mt-2'
                        type="submit"
                        value="Register" />
                </form>
                <GoogleAuth></GoogleAuth>
            </div>

        </div>
    );
};

export default Register;