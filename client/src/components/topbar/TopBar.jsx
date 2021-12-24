import { Link } from "react-router-dom";
import "./topbar.css";

const TopBar = ({user}) => {
 
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fab fa-facebook topIcon"></i>
        <i className="fab fa-twitter topIcon"></i>
        <i className="fab fa-github topIcon"></i>
        <i className="fab fa-linkedin topIcon"></i>
        <i className="fab fa-instagram topIcon"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about " className="link">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/login" className="link">
              {user && "Logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
         <Link to="/settings" className="link" >
              <img
            src="https://randomuser.me/api/portraits/women/19.jpg"
            alt=""
            className="topImg"
            
            
          />
         </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register " className="link">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="fas fa-search topSearchIcon"></i>
      </div>
    </div>
  );
};

export default TopBar;