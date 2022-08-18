import React, { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'

import { SecondPage } from 'components/Main/SecondPage/SecondPage'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'

import css from './App.module.css'
import './App.module.css'
import { FirstPage } from 'components/Main/FirstPage/FirstPage'

function App() {
  const [users, setUsers] = useState({})
  console.log(users)

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }

  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <div className={css.navbar}>
            <NavLink
              to="/firstpage"
              className={css.navlink}
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: '3px red solid',
                    }
                  : { color: '#545e6f', background: '#f0f0f0' }
              }
            >
              First Page
            </NavLink>
            <NavLink
              onClick={getUsers}
              to="/secondpage"
              className={css.navlink}
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: 'none',
                      borderBottom: '3px red solid',
                    }
                  : { color: '#545e6f', background: '#f0f0f0' }
              }
            >
              Second Page
            </NavLink>
          </div>
        </div>

        <Routes>
          <Route path="/firstpage" element={<FirstPage />} />

          <Route path="/secondpage" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
