import { NavBar } from './components/NavBar/NavBar'
import { FirstPage } from './components/Main/FirstPage/FirstPage'
import { SecondPage } from 'components/Main/SecondPage/SecondPage'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'

import css from './App.module.css'
import './App.module.css'

function App() {
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
