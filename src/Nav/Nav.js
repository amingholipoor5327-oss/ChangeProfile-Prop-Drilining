import { Link } from "react-router-dom";
import "./Nav.css";  

export const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home🏦</Link>
      <Link to="/profile" className="nav-link">Profile👤</Link>
      <Link to="/about" className="nav-link">About❗</Link>
    </nav>
  );
};