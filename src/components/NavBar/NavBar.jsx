import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <header className='App-header'>
        Watch Box
        <nav>
          {user ?
            <ul className='Navbar'>
              <li><NavLink to="/">Watches</NavLink></li>
              <li><NavLink to="/add">Add Watch</NavLink></li>
              <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
              <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
            </ul>
          :
          <ul>
              <li><NavLink to="/auth/login">Log In</NavLink></li>
              <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
            </ul>
          }
        </nav>
      </header>
    </>
  )
}

export default NavBar
