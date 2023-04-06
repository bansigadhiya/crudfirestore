import React, { useState } from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import './CreateStudent.css';
import { useDispatch, useSelector } from 'react-redux';
import { CreateStuAction , CreateStuAsync, CreateStuFirestore } from '../../Services/Actions/CreateStu.action';
import { NavLink, useNavigate } from 'react-router-dom';

function CreateStudent() {
    const [initial, setInitial] = useState({
        fName: '',
        lName: '',
        sContact: '',
        pContact: '',
        email: '',
        address: ''
    })

    const dispatch = useDispatch();
    const { studentList } = useSelector((state) => state.CreateStuReducer);
    const { isLoading } = useSelector((state) => state.CreateStuReducer);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({
            ...initial, [name]: value
        })
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const lastId = studentList.length > 0 ? studentList[studentList.length - 1].id : 0;

        const data = { ...initial, id: lastId + 1 }
        dispatch(CreateStuFirestore(data));
        setInitial({
            fName: '',
            lName: '',
            sContact: '',
            pContact: '',
            email: '',
            address: ''
        })
    }
    return (
        <div>
            <div>
                <Container>
                    <h2 className='my-4 text-center title'>Student Registration Form</h2>
                    <Row className='justify-content-center'>
                        <div className='col-7'>
                            <Form onSubmit={(e) => { handleSubmit(e) }}>
                                <Row>
                                    <Form.Group className="mb-3 w-50">
                                        <Form.Control type="text" placeholder="Enter first name.." className='rounded-0 py-2' name="fName" value={initial.fName} onChange={(e) => { handleChange(e) }} />
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-50">
                                        <Form.Control type="text" placeholder="Enter last name.." className='rounded-0 py-2' name="lName" value={initial.lName} onChange={(e) => { handleChange(e) }} />
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-50">
                                        <Form.Control type="text" placeholder="Enter student's contact number.." className='rounded-0 py-2' name="sContact" value={initial.sContact} onChange={(e) => { handleChange(e) }} />
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-50">
                                        <Form.Control type="text" placeholder="Enter parents's contact number.." className='rounded-0 py-2' name="pContact" value={initial.pContact} onChange={(e) => { handleChange(e) }} />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Control type="email" placeholder="Enter email" className='rounded-0 py-2' name="email" value={initial.email} onChange={(e) => { handleChange(e) }} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <textarea name="address" cols="98" rows="3" className='form-control rounded-0 py-2' placeholder='Enter Address' value={initial.address} onChange={(e) => { handleChange(e) }}></textarea>
                                </Form.Group>

                                <Form.Group>
                                    <div className='form-control rounded-0 d-flex align-items-center'>
                                        <Form.Label className='me-3 mb-0 py-2'>Gender :-</Form.Label>
                                        {
                                            ["Male", "Female"].map((label, index) => {
                                                return (
                                                    <Form.Check
                                                        inline
                                                        label={label}
                                                        name="gender"
                                                        type="radio"
                                                        value={label}
                                                        onChange={(e) => { handleChange(e) }}
                                                        checked={initial.gender == label}
                                                        key={index}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </Form.Group>

                                <Button type="submit" className='btn-primary rounded-0 px-5 py-2 mt-3 border-0 btn-bg'>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <div className='col-5'>
                            <img src="images/stu.png" alt="" className='img-fluid' />
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default CreateStudent
