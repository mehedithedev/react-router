import React from 'react'
import {useNavigate} from 'react-router-dom';
function Menu() {
    let navigate = useNavigate()
  return (
    <div>
        <h1>This is menu page</h1>
        <button onClick={()=>{
            navigate('/contact')
        }}>
            Change to Contact page
        </button>
        <button onClick={()=>navigate('/')}>Change to Home page</button>
    </div>
  )
}

export default Menu