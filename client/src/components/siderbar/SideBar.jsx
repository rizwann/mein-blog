import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const SideBar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const response = await axios.get("/categories");
      setCats(response.data);
      
    };
    fetchCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://random.imagecdn.app/250/150"
          alt=""
          className="sidebarImg"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum
          dolor sit amet consectetur adipisicing elit..
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((cat,i) => (

<Link to={`/?cat=${cat.name}`} key={i} className='link'>

            <li className="sidebarListItem" key={cat._id}>
              {cat.name}
            </li>
  </Link>

          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <a className="link" href="https://fb.com/riijwan" target="_blank" rel='noreferrer' >
        <i className="fab fa-facebook sidebarIcon"></i>
        </a>
       <a  className="link" href="/" target="_blank" rel='noreferrer'>
       
        <i className="fab fa-twitter sidebarIcon"></i>
       </a>
       <a className="link" href="https://github.com/rizwann" target="_blank" rel='noreferrer'>
       
        <i className="fab fa-github sidebarIcon"></i>
       </a>
       <a className="link" href="https://www.linkedin.com/in/kabirrizwan/" target="_blank" rel='noreferrer'>
       
        <i className="fab fa-linkedin sidebarIcon"></i>
       </a>
       <a className="link" href="https://www.instagram.com/rizwan.kabir/" target="_blank" rel='noreferrer'>
       
        <i className="fab fa-instagram sidebarIcon"></i>
       </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
