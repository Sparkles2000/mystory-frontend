import { NavLink } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/user">Users</NavLink>
      <NavLink to="/UserProfile">User Profile</NavLink>
    </nav>
  )
}

export default NavBar;