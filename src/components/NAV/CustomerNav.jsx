import "./navbar.css"
import { Link, useNavigate } from "react-router-dom"


export const CustomerNav = () => {
  const navigate = useNavigate()
  return <ul className="navbar">
  {localStorage.getItem("honey_user") ? (
    <>
      <li className="navbar-item">
      <Link className="navbar-link" to="/tickets">Tickets</Link>
    </li>
  <li className="navbar-item navbar-logout">
    <Link
      className="navbar-link"
      to=""
      onClick={() => {
        localStorage.removeItem("honey_user")
        navigate("/", { replace: true })
      }}
    >
      Logout
    </Link>
  </li>
  </>
) 
: (
  ""
)}
  </ul>
}