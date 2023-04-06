import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { LognInwithGoogle, LogInwithEmail, LoginwithEmail } from '../../Services/Actions/Auth.action';

function LogIn() {
    const [initial, setInitial] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch();

    const { error } = useSelector((state) => state.AuthReducer)
    const { user } = useSelector((state) => state.AuthReducer)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({
            ...initial, [name]: value
        })
    }

    const handleLogIn = () => {
        dispatch(LognInwithGoogle())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(LoginwithEmail(initial.email, initial.password))
    }
    const navigate = useNavigate();

    if(user !== null){
        navigate('/')
    }else{
        return (
            <div>
                <div className="form-wrapper position-fixed top-0 vw-100 vh-100 d-flex align-items-center">
                    <div className="container">
                        <Form className='w-50 mx-auto bg-white p-3 rounded' onSubmit={(e) => handleSubmit(e)}>
                            <h5>Log in Your Account..</h5>
                            <hr></hr>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' value={initial.email} onChange={(e) => { handleChange(e) }} />
                            </Form.Group>
    
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' value={initial.password} onChange={(e) => { handleChange(e) }} />
                                {
                                    error == 'auth/user-not-found' ? <p className='text-danger' style={{ fontSize: '13px', fontWeight: '600' }}>Please create your account</p> : ''
                                }
                                {
                                    error == 'auth/wrong-password' ? <p className='text-danger' style={{ fontSize: '13px', fontWeight: '600' }}>Wrong Password</p> : ''
                                }
                            </Form.Group>
    
    
                            <div className='d-flex align-items-center justify-content-between'>
                                <Button type="submit" className='signup-btn px-4 py-2'>
                                    Log In
                                </Button>
                                <NavLink to='/' className='signup-btn px-4 py-2 rounded text-decoration-none'>Back</NavLink>
                            </div>
    
                            <Button variant="outline-success" className='mt-3' onClick={() => { handleLogIn() }}>LogIn with Google</Button>
    
                            <p className='mb-0 mt-3 already'>Don't have an account ?
                                <span>
                                    <NavLink to='/signup'> Sign Up</NavLink>
                                </span>
                            </p>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn
