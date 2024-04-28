import React, { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
function AddFeedback() {
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
        await axios.post("http://localhost:5000/feedback/addFEEDBACK", form)
            .then((response) => {
                toast.success("Feedback Succesfull")
                console.log(response.data);
                setForm({});
                
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            {/* <!-- register form --> */}
            <div className="container mb-5">
                <div className="shadow p-4 mt-5 bg-body-tertiary rounded">
                    <form>
                        <h1 className="display-5 mb-4">Add a Feedback</h1>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <input type="textarea" className="form-control" name="description" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={onSubmitHandler}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default AddFeedback;