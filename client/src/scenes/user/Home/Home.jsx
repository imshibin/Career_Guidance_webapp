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
        <h3 className="col-lg-6">Home</h3>
        <p>Welcome to Home</p>
        <div className="col-lg-2">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>College</Card.Title>
              <i class="fa-solid fa-building-columns fa-2xl"></i>
              <NavLink to="/user/College">
              <button className='btn btn-primary btn-sm w-40 m-2'>View College</button>
              </NavLink>
             
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-2">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Job</Card.Title>
              <i class="fa-solid fa-user-tie fa-2xl"></i>
              <NavLink to="/user/ViewJobs">
              <button className='btn btn-primary btn-sm w-40 m-2'>View Job</button>
              </NavLink>
              
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-2">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Feedback</Card.Title>
              <i class="fa-solid fa-comment-dots fa-2xl"></i>
              <NavLink to="/user/AddFeedback">
              <button className='btn btn-primary btn-sm w-40 m-2'>Add Feedback</button>
              </NavLink>
              
            </Card.Body>
          </Card>
        </div>

      </div>
    </div>
  )
}
export default Colleges
