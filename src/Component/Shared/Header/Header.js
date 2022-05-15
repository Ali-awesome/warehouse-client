import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid g-4">
                    <Link className='warehouse text-decoration-none text-dark' to={'./home'}>WAREHOUSE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <div className='navbar-nav d-flex justify-content-between w-50'>
                            <Link className='text-dark  nav-item text-decoration-none' to={'/#services'}>Services</Link>
                            <a className='text-dark  nav-item text-decoration-none' href="/#reviews">Reviews</a>
                            <Link
                                className='text-dark nav-item text-decoration-none'
                                to={'/blogs'}>Blog</Link>
                            <Link
                                className='text-dark nav-item text-decoration-none'
                                to={'/about'}>About Us</Link>
                            {
                                user ?
                                    <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>Log out</button>
                                    :
                                    <Link className='text-decoration-none text-dark' as={Link} to="login">
                                        Login
                                    </Link>}
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;