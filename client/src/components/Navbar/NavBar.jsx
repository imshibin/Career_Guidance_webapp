
import { toast } from "react-toastify";
import React from 'react';
import { logout } from '../../store/auth';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './appbar.css'


function NavBar() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const role = useSelector((state) => state.auth.role)
  console.log('role checking' + role)

  // 
  const handleLogout = async (e) => {
    e.preventDefault()
    toast.success("Logged out successfully");
    localStorage.clear()
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <div className="appbar">
        <div>Carrier Guidence</div>
        <div>
          {
            (role === 'user') &&
            (
              <>
                <NavLink to="/user/">Home</NavLink>
                <NavLink to="/user/College">View College</NavLink>
                <NavLink to="/user/ViewJobs">View Job</NavLink>
                <NavLink to="/user/AddFeedback">Add Feedback</NavLink>
              </>
            )
          }


          {
            (role === 'admin') &&
            (
              <>
              <NavLink to="/admin/">Home</NavLink>
                <NavLink to="/admin/addCOLLEGE">College</NavLink>
                <NavLink to="/admin/viewFeedback">Feedback</NavLink>
                <NavLink to="/admin/addJOB">Job</NavLink>
              </>
            )
          }

          {/* {
            (role === '') && (
              <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>

              </>
            )
          } */}
        </div>

        {
            (role === 'admin'|| role ==='user') &&
            (
              <>
                <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
              </>
            )
          }
  
      
      </div>
    </>
  );
}

export default NavBar;