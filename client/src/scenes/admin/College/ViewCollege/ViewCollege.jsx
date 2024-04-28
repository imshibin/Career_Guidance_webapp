import React, { useState} from 'react'
import './viewCollege.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';




function ViewCollege() {
    const navigate = useNavigate();
    const [rows, setRows] = useState([])
    function setRow() {
        axios.get("http://localhost:5000/college/getCOLLEGE")
            .then((res) => {
                setRows(res.data.result2);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }


    React.useEffect(() => {
        setRow();
    }, []);


    // handling modal
    const [show, setShow] = useState(false);
    const [collegeId, setCollegeId] = useState()
    const handleClose = () => setShow(false);
    const HandleModal = (id) => {

        setCollegeId(id)
        setShow(true)
    }

    async function addcourse(event) {
        event.preventDefault()
        console.log(collegeId)
        await axios
            .post(`http://localhost:5000/course/addCourse/${collegeId}`,form)
            .then((res) => {               
                alert("Course Added")
                navigate(`/admin/ViewCourse/?id=${collegeId}`)
            })
            .catch((err) => {
                console.error(err);
            });
    }

    // form handler
    const [form, setForm] = useState({})
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    // deleting
    async function Delete(id) {
        await axios
            .delete(`http://localhost:5000/college/deleteCOLLEGE/${id}`)
            .then((res) => {
                setRow()
                alert("Deleted")
            })
            .catch((err) => {
                console.error(err);
            });
    }

    React.useEffect(() => {
        setRow();
    }, []);

    return (
        <div>
            <div className="container mt-5 p-1">
                <div className="row mb-4 justify-content-between">
                    <h3 className="col-md-6">List of Colleges</h3>
                </div>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>SI.No</th>
                            <th>College Name</th>
                            <th>Place</th>
                            <th>Address</th>
                            <th>Contact Number</th>
                            <th>Email</th>
                            <th>Delete</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            rows.map((item, val) => {
                                return (
                                    <tr key={val}>
                                        <td>
                                            {rows.indexOf(item) + 1}
                                        </td>
                                        <td>
                                            {item.collegeName}
                                        </td>
                                        <td>
                                            {item.place}
                                        </td>
                                        <td>
                                            {item.address}
                                        </td>
                                        <td>
                                            {item.contactNumber}
                                        </td>
                                        <td>
                                            {item.email}
                                        </td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                {/* <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" */}
                                                {/* data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button> */}
                                                <button class="btn btn-danger  btn-sm" onClick={() => Delete(item._id)}><i class="fa-solid fa-trash"></i></button>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                {/* <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" */}
                                                {/* data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button> */}
                                                <button class="btn btn-danger  btn-sm" onClick={() => HandleModal(item._id)}>Add Course</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

            {/* modal */}
            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Courses</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <h1 className="display-5 mb-4">Add a Course</h1>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Course Name</label>
                                    <input type="text" className="form-control" name="courseName" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Duration</label>
                                    <input type="text" className="form-control" name="duration" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">


                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label">Course Fee</label>
                                        <input type="Number" className="form-control" name="courseFee" onChange={onChangeHandler} />
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Subjects</label>
                                    <input type="text" className="form-control" name="subjects" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={addcourse}>Submit</button>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-secondary' onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
export default ViewCollege



