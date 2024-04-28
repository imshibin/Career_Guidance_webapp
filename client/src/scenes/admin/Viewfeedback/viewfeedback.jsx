import React, { useEffect, useState } from 'react';
import axios from 'axios';


function ViewFeedback() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeedback() {
      try {
        const response = await axios.get('http://localhost:5000/feedback/getFEEDBACK');
        setFeedbackList(response.data.result2);
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchFeedback();
  }, []);

  return (
    <div className="container mt-5 p-1">
      <div className="row mb-4 justify-content-between">
        <h3 className="col-md-6">View Feedback</h3>
      </div>

      {loading ? (
        <p>Loading feedback...</p>
      ) : (
        feedbackList.length > 0 ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SI.No</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
  
            <tbody>
              {feedbackList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No feedback available.</p>
        )
      )}
    </div>
  );
}

export default ViewFeedback;






// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';


// function Viewfeedback() {

//   const [rows, setRows] = React.useState([]);
//   async function setRow() {
//     await axios
//       .get(`http://localhost:5000/feedback/getFEEDBACK`)
//       .then((res) => {
//         setRows(res.data.result3);
//         console.log(res);

//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }


//   React.useEffect(() => {
//     setRow();
//   }, []);

//   const navigate = useNavigate()


//   return (
//     <div className="container mt-5 p-1">
//       <div className="row mb-4 justify-content-between">
//         <h3 className="col-md-6">View Feedback</h3>
//         <button type="button" className="col-md-2 btn btn-primary btn-sm" onClick={()=>navigate('/admin')}>Add Jobs</button>
//       </div>

//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>SI.No</th>
//             <th>Name</th>
//             <th>Description</th>
//           </tr>
//         </thead>

//         <tbody>
//           {
//             rows.map((item, val) => {
//               return (
//                 <tr key={val}>
//                   <td>
//                     {rows.indexOf(item) + 1}
//                   </td>
//                   <td>
//                     {item.name}
//                   </td>
//                   <td>
//                     {item.description}
//                   </td>
//                 </tr>
//               )
//             })
//           }
//         </tbody>
//       </table>

//     </div>
//   )
// }

// export default Viewfeedback