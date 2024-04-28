import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { Link, NavLink } from 'react-router-dom';


function Colleges() {
  const [colleges, setColleges] = useState([])
  function GetColleges() {
    axios.get("http://localhost:5000/college/getCOLLEGE")
      .then((res) => {
        setColleges(res.data.result2)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <div className="container mt-5 p-1">
      <div className="row lg-4 justify-content-between">
        <h3 className="col-lg-6">Colleges</h3>
        <p>Find Your Perfect Campus</p>
        <div className="col-lg-2">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>College</Card.Title>
              <NavLink to="/admin/addCOLLEGE">
              <button className='btn btn-primary btn-sm w-40 m-2'>Add College</button>
              </NavLink>
              <NavLink to="/admin/ViewCollege">
              <button className='btn btn-primary btn-sm w-40 m-2'>View College</button>
              </NavLink>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-2">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Job</Card.Title>
              <NavLink to="/admin/AddJob">
              <button className='btn btn-primary btn-sm w-40 m-2'>Add Job</button>
              </NavLink>
              <NavLink to="/admin/ViewJob">
              <button className='btn btn-primary btn-sm w-40 m-2'>View Job</button>
              </NavLink>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-2">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Feedback</Card.Title>
              {/* <NavLink to="/user/AddFeedback">
              <button className='btn btn-primary btn-sm w-40 m-2'>Add Feedback</button>
              </NavLink> */}
              <NavLink to="/admin/viewfeedback">
              <button className='btn btn-primary btn-sm w-40 m-2'>View Feedback</button>
              </NavLink>
            </Card.Body>
          </Card>
        </div>

      </div>
    </div>
  )
}
export default Colleges
