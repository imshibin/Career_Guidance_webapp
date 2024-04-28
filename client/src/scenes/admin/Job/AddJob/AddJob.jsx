import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function Job() {

    const navigate = useNavigate()
    // form handler
    const [form, setForm] = useState({})
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/job/addJOB", form)
            .then((response) => {
                console.log(response.data);
                setForm({});
                navigate('/admin/viewjob')
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            {/* <!-- register form --> */}
            <div className="container mb-5">
                <div className="shadow p-4 mt-5 bg-body-tertiary rounded">
                    <form>
                        <h1 className="display-5 mb-4">Post a Job</h1>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Job Title</label>
                                    <input type="text" className="form-control" name="jobTitle" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Company Name</label>
                                    <input type="text" className="form-control" name="companyName" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">


                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" name="email" onChange={onChangeHandler} />
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Salary Package</label>
                                    <input type="text" className="form-control" name="salaryPackage" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Job Type</label>
                                    <input type="text" className="form-control" name='jobType' onChange={onChangeHandler} />

                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Contact No</label>
                                    <input type="text" className="form-control" name="contactNumber" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-3">
                                <label className="form-label">Qualification</label>
                                <input type="text" className="form-control" name="Qualification" onChange={onChangeHandler} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-3">
                                <label className="form-label">Job Requiements</label>
                                <input type="textarea" className="form-control" name="jobRequirements" onChange={onChangeHandler} />
                            </div>
                        </div>

                        

                        <button className="btn btn-primary" onClick={onSubmitHandler}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Job;