import React from 'react'
import {useContext} from 'react'
import { AppContext} from '../App'
import {useNavigate,} from 'react-router-dom';

function Home() {

  const {userName}= useContext(AppContext)
  let navigate= useNavigate()
  return (
    <div>
        <h1>This is the home page of {userName}</h1>
        <button onClick={()=>navigate('/contact')}>Change to Contact Page</button>
        <button onClick={()=>navigate('/menu')}>Change to Menu page</button>
        <button onClick={()=>navigate('/profile')}>Change to Profile page</button>
    </div>
  )
}

export default Home