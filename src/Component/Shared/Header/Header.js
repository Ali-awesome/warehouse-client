import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'
import { Dropdown } from 'react-bootstrap';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='banner sticky-top' >
            <nav className="navbar navbar-expand-lg py-3 js-sticky-header">
                <div className="container g-4">
                    <Link className='warehouse text-decoration-none' to={'./home'}>WAREHOUSE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <div className='navbar-nav d-flex justify-content-between w-50'>
                            <a className='warehouse nav-item text-decoration-none' href='/#properties'>Furnitures</a>
                            <a className='warehouse nav-item text-decoration-none' href="/#contact">Contact Us</a>
                            <Link
                                className='warehouse nav-item text-decoration-none'
                                to={'/blogs'}>Blog</Link>
                            {
                                user &&
                                <Dropdown>
                                    <Dropdown.Toggle className='warehouse' id="dropdown-basic">
                                        Dropdown
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item className='warehouse' as={Link} to={'/my-items'}>My Items</Dropdown.Item>
                                        <Dropdown.Item className='warehouse' as={Link} to={'/all-items'}>Manage Inventory</Dropdown.Item>
                                        <Dropdown.Item className='warehouse' as={Link} to={'/add-items'}>Add Items</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            }
                            {
                                user ?
                                    <button className='warehouse btn btn-link text-decoration-none' onClick={handleSignOut}>Log out</button>
                                    :
                                    <Link className='warehouse text-decoration-none' as={Link} to="login">
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