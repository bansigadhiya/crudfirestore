import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { Logout } from '../../Services/Actions/Auth.action';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user} = useSelector((state) => state.AuthReducer)

    const handleLogOut = () => {
        dispatch(Logout())
    }

    return (
        <header className='py-3 header'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="logo col-2 m-0">
                        <h3 className='text-white m-0'>StudentCrud</h3>
                    </div>
                    <div className="menu col m-0">
                        <nav>
                            <ul className='d-flex list-unstyled p-0 m-0 justify-content-end'>
                                <li className='px-3'>
                                    <NavLink to='/' className='text-white text-decoration-none'>Home</NavLink>
                                </li>
                                <li className='px-3'>
                                    <NavLink to='/about' className='text-white text-decoration-none'>About</NavLink>
                                </li>
                                <li className='px-3'>
                                    <NavLink to='/createstudent' className='text-white text-decoration-none'>CreateStudent</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-1'>
                        {
                            user !== null ? <NavLink className='btn btn-light rounded-0' style={{fontSize : '14px'}} onClick={() => handleLogOut()}>Log Out</NavLink> : <NavLink to='/signUp' className='btn btn-light rounded-0' style={{fontSize : '14px'}}>Sign Up</NavLink>
                        }
                        {/* <NavLink to='/signup' className='btn btn-light rounded-0' style={{fontSize : '14px'}}>Sign Up</NavLink> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
