import React from 'react'
import {useNavigate} from 'react-router-dom';

function Home() {
  let navigate= useNavigate()
  return (
    <div>
        <h1>This is the home page</h1>
        <button onClick={()=>navigate('/contact')}>Change to Contact Page</button>
        <button onClick={()=>navigate('/menu')}>Change to Menu page</button>
        <button onClick={()=>navigate('/profile')}>Change to Profile page</button>
    </div>
  )
}

export default Home