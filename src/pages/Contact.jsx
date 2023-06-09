import React from 'react'
import {useNavigate, useParams} from 'react-router-dom';



function Contact() {
    let navigate= useNavigate()
    let {userName} =useParams()
    return (
    <div>
        <h1>This is Contact Page of {userName}</h1>
        <button onClick={()=>navigate('/')}>
            Go to Home Page
        </button>
        <button onClick={()=>navigate('/menu')}>
            Go to Menu Page
        </button>
    </div>
  )
}

export default Contact