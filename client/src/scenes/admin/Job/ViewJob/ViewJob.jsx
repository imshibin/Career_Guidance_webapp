import React from 'react'
import './viewjob.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function ViewJob() {

  const [rows, setRows] = React.useState([]);
  async function setRow() {
    await axios
      .get(`http://localhost:5000/job/getJOB`)
      .then((res) => {
        setRows(res.data.result);
        console.log(res.data.result);

      })
      .catch((err) => {
        console.error(err);
      });
  }

  // deleting
  async function Delete(id) {
    await axios
      .delete(`http://localhost:5000/job/deleteJOB/${id}`)
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

  const navigate = useNavigate()


  return (
    <div className="container mt-5 p-1">
      <div className="row mb-4 justify-content-between">
        <h3 className="col-md-6">View Jobs</h3>
        <button type="button" className="col-md-2 btn btn-primary btn-sm" onClick={()=>navigate('/admin/AddJob')}>Add Jobs</button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Job Title</th>
            <th>Company Name</th>
            <th>Job Type</th>
            <th>Salary</th>
            <th>Email</th>
            <th>Qualification</th>
            <th>Delete</th>
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
                    {item.jobTitle}
                  </td>
                  <td>
                    {item.companyName}
                  </td>
                  <td>
                    {item.jobType}
                  </td>
                  <td>
                    {item.salaryPackage}
                  </td>
                  <td>
                    {item.email}
                  </td>
                  <td>
                    {item.Qualification}
                  </td>
                  <td>
                    <div class="btn-group" role="group">
                      {/* <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" */}
                      {/* data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button> */}
                      <button class="btn btn-danger  btn-sm" onClick={() => Delete(item._id)}><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default ViewJob