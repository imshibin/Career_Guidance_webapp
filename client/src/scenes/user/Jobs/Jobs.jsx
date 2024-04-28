import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewJob() {
  const [jobList, setJobList] = useState([]);
  const [rows, setRows] = React.useState([]);
  const [selectedQualification, setSelectedQualification] = React.useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJob() {
      try {
        const response = await axios.get('http://localhost:5000/job/getJOB');
        setJobList(response.data.result);
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchJob();
  }, []);

  const handleQualificationChange = (event) => {
    setSelectedQualification(event.target.value);
  };

  const filteredJobList = selectedQualification
    ? jobList.filter((item) => item.Qualification === selectedQualification)
    : jobList

  return (
    <div className="container mt-5 p-1">
      <div className="row mb-4 justify-content-between">
        <h3 className="col-md-6">View Jobs</h3>
      </div>

      <div className="mb-3 w-25">
        <label htmlFor="qualificationFilter" className="form-label">
          Filter:
        </label>
        <select
          id="qualificationFilter"
          className="form-select"
          value={selectedQualification}
          onChange={handleQualificationChange}
        >
          <option value="">All</option>
          {[
            ...new Set(jobList.map((item) => item.Qualification)),
          ].map((Qualification) => (
            <option key={Qualification} value={Qualification}>
              {Qualification}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading Jobs...</p>
      ) : filteredJobList.length > 0 ? (
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
            </tr>
          </thead>

          <tbody>
            {filteredJobList.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.jobTitle}</td>
                <td>{item.companyName}</td>
                <td>{item.jobType}</td>
                <td>{item.salaryPackage}</td>
                <td>{item.email}</td>
                <td>{item.Qualification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Jobs available.</p>
      )}
    </div>
  );
}
export default ViewJob;
