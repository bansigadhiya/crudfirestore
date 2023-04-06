import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpwithEmail } from '../../Services/Actions/Auth.action';

function SignUp() {

    const [initial, setInitial] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: ''
    })
    const [err, setErr] = useState('')
    const { error } = useSelector((state) => state.AuthReducer)
    const { user } = useSelector((state) => state.AuthReducer)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({
            ...initial, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (initial.password !== initial.cpassword) {
            setErr("Password dosn't match");
        }
        else {
            setErr('');
            dispatch(SignUpwithEmail(initial.email, initial.password))
        }

    }

    if (user !== null) {
    navigate('/')
    } else {
    return (
        <div>
            <div className="form-wrapper position-fixed top-0 vw-100 vh-100 d-flex align-items-center">
                <div className="container">
                    <Form className='w-50 mx-auto bg-white p-3 rounded' onSubmit={(e) => { handleSubmit(e) }}>
                        <h5>Create your Account..</h5>
                        <hr></hr>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" value={initial.name} onChange={(e) => { handleChange(e) }} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={initial.email} onChange={(e) => { handleChange(e) }} />
                            {
                                    error == 'auth/email-already-in-use' ? <p className='text-danger' style={{ fontSize: '13px', fontWeight: '600' }}>Email already in use</p> : ''
                                }
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={initial.password} onChange={(e) => { handleChange(e) }} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="cpassword" value={initial.cpassword} onChange={(e) => { handleChange(e) }} />
                            <p className='text-danger' style={{ fontSize: '13px', fontWeight: '600' }}>{err}</p>
                        </Form.Group>

                        <div className='d-flex align-items-center justify-content-between'>
                            <Button type="submit" className='signup-btn px-4 py-2'>
                                Sign Up
                            </Button>
                            <NavLink to='/' className='signup-btn px-4 py-2 rounded text-decoration-none'>Back</NavLink>
                        </div>

                        <p className='mb-0 mt-3 already'>Already have an account ?
                            <span>
                                <NavLink to='/login'> Log In</NavLink>
                            </span>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    )
    }
}

export default SignUp
