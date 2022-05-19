import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
// import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleAuth from '../GoogleAuth/GoogleAuth';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
        toast('Congratulations! Succcessfully logged in!')
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);
        event.target.reset();
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async (event) => {
        const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address!');
        }
    }

    return (
        <div className='container w-50 mx-auto d-flex mt-5'>
            <div className='w-50 pt-5'>
                <img className='img-fluid' src="https://i.postimg.cc/cJbZ81r9/login.png" alt="" />
            </div>
            <div className='w-50 border border-warning rounded p-3 ms-3'>
                <h2 className='text-secondary fs-2 text-center mt-2'>Login And Thrive</h2>
                <button type="button" className="btn border border-warning"><Link to="/register" className='warehouse p-2 text-decoration-none' onClick={navigateRegister}>Registered?</Link></button>

                <form className='my-3' onSubmit={handleSubmit}>

                    <input className='mb-3 w-100 border rounded' type="email" name="email" placeholder='Enter Your Email Address' required />

                    <input className='mb-3 w-100 border rounded' type="password" name="password" placeholder='Enter Your Password' required />
                    <input
                        className='warehouse border border-warning w-50 mx-auto d-block mb-2'
                        type="submit"
                        value="Login" />
                </form>
                {errorElement}
                <button type="button" className="btn"><button className='warehouse btn btn-link p-2 text-decoration-none' onClick={resetPassword}>Need To Reset Password?</button></button>
            </div>


            <GoogleAuth></GoogleAuth>

        </div>
    );
};

export default Login;