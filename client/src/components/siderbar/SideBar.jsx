import "./sidebar.css";

const SideBar = () => {
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
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Politics</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">World</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Entertainment</li>
        </ul>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">Follow Us</span>
          <div className="sidebarSocial">
          <i className="fab fa-facebook sidebarIcon"></i>
               <i className="fab fa-twitter sidebarIcon"></i>
               <i className="fab fa-github sidebarIcon"></i>
               <i className="fab fa-linkedin sidebarIcon"></i>
               <i className="fab fa-instagram sidebarIcon"></i>
          </div>
      </div>
    </div>
  );
};

export default SideBar;
