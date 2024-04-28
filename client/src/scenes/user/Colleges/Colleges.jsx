import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';

function Colleges() {

  const id = useSelector((state) => state.auth.courseStudied);
  console.log(id,"id");

  const [colleges, setColleges] = useState([])
  function GetColleges() {
    axios.get("http://localhost:5000/college/getCOLLEGE")
      .then((res) => {
       

        if(res.data.result2 == undefined){
          alert("SERVER ERROR")
        }
        else{
          const Cdata = res.data.result2 
          if(id == "Computer Science"){
          const clg = Cdata.filter((item)=>item.category !== "Medical")
          setColleges(clg)
          }
          else if( id =="Commerce"|| id =="Humantities"){
            const clg = Cdata.filter((item)=>item.category !== "Medical" && item.category !== "Engineering" )
            setColleges(clg)
          }
          else{
           const  clg = Cdata
           setColleges(clg)
          }

        }






       
      
      })
      .catch((err) => {
        console.log(err)
      })
  }



  // handling modal
  const [show, setShow] = useState(false);
  const [accordionData, setAccordionData] = useState([]);

  const handleClose = () => setShow(false);


  function FetchCourse(item) {
    setShow(true)
    setAccordionData(item.courses)
    console.log(item.courses)
  }

  useEffect(() => {
    GetColleges()
    // GetUser(id)
  }, [])



  return (
    <div className="container mt-5 p-1">
      <div className="row mb-4 justify-content-between">
        <h3 className="col-md-6">Colleges</h3>
        <p>Find Your Perfect Campus</p>
      </div>


      {/* cards */}
      <div className="row g-3">
        {
          colleges.map((item, val) => {
            return (
              <div className="col-md-4" key={val}>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{item.collegeName}</Card.Title>
                    <Card.Text>{item.place}</Card.Text>
                    <Card.Text>{item.address}</Card.Text>
                    <Card.Text>{item.contactNumber}</Card.Text>
                    <Card.Text>{item.email}</Card.Text>
                    <button onClick={() => FetchCourse(item)} className='btn btn-primary btn-sm w-100'>Available Courses</button>
                  </Card.Body>
                </Card>
              </div>
            )
          })
        }


        {/* modal */}
        <Modal show={show} onHide={handleClose} size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>Courses</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* accordion data */}

            <Accordion defaultActiveKey="0" flush>
              {
                (accordionData.length !== 0) ?
                  accordionData?.map((item, val) => {
                    return (
                      <>
                        <Accordion.Item eventKey={val}>
                          <Accordion.Header>{item.courseName}</Accordion.Header>
                          <Accordion.Body>
                            <p>Duration: {item.duration}</p>
                            <p>Course Fee: {item.courseFee}</p>
                            <p>Subjects: {item.subjects}</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </>
                    )
                  })
                  :
                  <h5>No courses are registered by the college</h5>

              }
            </Accordion>
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-secondary' onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Colleges