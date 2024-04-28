import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../../components/Navbar/NavBar'
function LandingPage() {
  const navigate = useNavigate()
  return (
    // < !--main page-- >
    <div className="container-lg d-flex align-items-center justify-content-center flex-column" style={{ height: '100vh' }}>
      <h1 className="display-2 mb-4">Carrier Guidence</h1>
      <button type="submit" className="btn btn-primary btn-lg mt-2" onClick={() => navigate('/login')}>Get Started</button>
    </div>
  )
}

export default LandingPage