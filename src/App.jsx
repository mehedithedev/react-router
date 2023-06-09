import React, { useState , useContext, createContext} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Profile from './pages/Profile';

export const AppContext = createContext()

function App() {
  const [userName, setUserName] = useState('Mehedi Hasan')
  return (
    <div className='app'>
      <AppContext.Provider value={{userName, setUserName}}>
      <Router>
      <Navbar/>
      {/* Nav bar won't be changed no matter in which page we are and it's gonna be static */}

        <Routes>  
          <Route
           path='/'
            element={<Home />}
          />
          <Route
            path='/menu'
            element={<Menu/>}
          />
          <Route
            path='/profile'
            element={<Profile/>}
          />
          <Route
            path='/contact'
            element={<Contact/>}
          />
          {/* <Route
            path='/contact/:userName'
            element={<Contact/>}
          /> */}
          <Route
            path='*'
            element={<h1>Page not found 404</h1>}
          />
          
        </Routes>

        <footer>
          This is the footer
        </footer>
      </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App