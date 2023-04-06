import React, { useEffect } from 'react'
import { Container, Table, Button, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './ViewStudent.css';
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons';
import { DeleteStuAction, DeleteStuFirestore, GetInfoAction, GetStuFirestore,GetStuInfoFirestore } from '../../Services/Actions/CreateStu.action';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from 'react-router-dom';

function ViewStudent({ handleEdit }) {

    const { studentList,isEdit } = useSelector((state) => state.CreateStuReducer);
    const { isLoading } = useSelector((state) => state.CreateStuReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (id) => {
        dispatch(GetStuInfoFirestore(id))
        handleEdit();
    }

    const handleClick = () => {
        navigate('/')
    }

    const getData = () => {
        dispatch(GetStuFirestore())
    }

    useEffect(() => {
        console.log("useeffect");
        getData();
    },[])

    const studata = (studentList) => {
        return (
            <>
                <Container>
                    <Row className='align-items-center justify-content-between mt-3'>
                        <h2 className='col-4'>Student Data</h2>
                        <Button variant='primary' className='col-2 border-0' onClick={() => { handleClick() }}>Add Student</Button>
                    </Row>
                </Container>
                <Table className='mt-3' bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Full Name</th>
                            <th>Contact Number</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentList.map((stu, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td rowSpan="2">
                                                {stu.id}
                                            </td>
                                            <td rowSpan="2">
                                                {
                                                    `${stu.fName} ${stu.lName}`
                                                }
                                            </td>
                                            <td>
                                                {stu.sContact}
                                            </td>
                                            <td rowSpan="2" >
                                                {stu.email}
                                            </td>
                                            <td rowSpan="2">
                                                {stu.address}
                                            </td>
                                            <td rowSpan="2">
                                                {stu.gender}
                                            </td>
                                            <td rowSpan="2">
                                                <div className='d-flex action'>
                                                    <Button variant="info" className='rounded-0 text-white mx-1 px-4' onClick={() => { handleUpdate(stu.id) }}>
                                                        <PencilSquare />
                                                        <span className='ps-2'>Edit</span>
                                                    </Button>
                                                    <Button variant="danger" onClick={() => dispatch(DeleteStuFirestore(stu.id))} className='rounded-0 mx-1 px-4'>
                                                        <Trash3Fill />
                                                        <span className='ps-2'>Delete</span>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr key={index}>
                                            <td>
                                                {stu.pContact}
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </>
        )
    }

    const skeleton = (studentList) => {

        return (
            <>
                <Table className='my-5' bordered hover>
                    <thead>
                        <tr>
                            <th><Skeleton /></th>
                            <th><Skeleton /></th>
                            <th><Skeleton /></th>
                            <th><Skeleton /></th>
                            <th><Skeleton /></th>
                            <th><Skeleton /></th>
                            <th><Skeleton /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentList.map((stu, index) => {
                                return (
                                    <>
                                        <tr key={index} className='w-100'>
                                            <td rowSpan="2"><Skeleton /></td>
                                            <td rowSpan="2"><Skeleton /></td>
                                            <td><Skeleton /></td>
                                            <td rowSpan="2"><Skeleton /></td>
                                            <td rowSpan="2"><Skeleton /></td>
                                            <td rowSpan="2"><Skeleton /></td>
                                            <td rowSpan="2">
                                                <div className='d-flex action'>
                                                    <div className='w-50 me-2'>
                                                        <Skeleton />
                                                    </div>
                                                    <div className='w-50'>
                                                        <Skeleton />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr key={index}>
                                            <td><Skeleton /></td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </>
        )
    }

    if(isEdit == true) {
        navigate('/editStudent')
    }else{
        return (
            <Container>
                {
                    isLoading ? skeleton(studentList) : studata(studentList)
                }
            </Container>
        )
    }
}

export default ViewStudent
