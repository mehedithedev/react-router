import React from 'react'
import {useContext} from 'react'
import { AppContext } from '../App';
import {useNavigate} from 'react-router-dom';
import ChangeProfile from './ChangeProfile';


function Profile() {
  const {userName}=useContext(AppContext)
let navigate= useNavigate()
    return (
    <div>
        <h1>This is profile page of {userName}</h1>
        <ChangeProfile/>
        <button onClick={()=>navigate('/')}>Click to get to Home</button>
        <button onClick={()=>navigate('/menu')}>Click to get to Menu</button>
        <button onClick={()=>navigate('/contact')}>Click to get to Contact</button>
        

    </div>
  )
}

export default Profile