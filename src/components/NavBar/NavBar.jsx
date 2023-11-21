import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

const NavBar = ({ user,setUser }) => {
  const handleLogOUt = () => {
    userService.logOut()
    setUser(null)
  }
  return (
    <nav>
      <Link to='/orders'>Order History</Link>
      &nbsp; |  &nbsp;
      <Link to='/orders/new'>New Order</Link>
      &nbsp;   &nbsp;
      <span> Welcome, {user.name}</span>
      &nbsp;  &nbsp; <Link to='' onClick={handleLogOUt}>Log Out</Link>
    </nav>
  )
}

export default NavBar