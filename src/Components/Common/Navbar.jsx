import React, { useState ,useEffect} from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../Styles/Common-css/Navbar.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar({onLogout = () => {},isAuthenticated,setIsAuthenticated,setIsUserLogin}) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);  
 const location = useLocation()
 const navigate = useNavigate();

 useEffect(() => {
  const isUserLogin = JSON.parse(localStorage.getItem("mobx-store"));
  if (!isUserLogin) {
    navigate("/Login");
  }
}, []);// Dependency array updated


  const handleHamburger = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    
  };
  const handleHamburgerLogOut = () => {
    setTimeout(() => {
      console.log("LOG OUT")
    onLogout()
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    setIsUserLogin(true);
      
    }, 1000);
    // Show toast after logout
  
    toast.success("Logout successful!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
     localStorage.setItem("mobx-store", JSON.stringify(false));
  
  };

  const handleAccountMouseEnter = () => {
    setIsOpen(true);
  };

  const handleAccountMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <header className="navheader">
      <nav className="NavBar">
        <div className="navUpperPart">
          <Link to="/" className="logoContainer">
            <h1 className="logo">
              <span className="logoLeft">E-</span>
              <span className="logoRight">Tech</span>
            </h1>
          </Link>
          <ul
            className={`linksContainer ${
              menuOpen ? "linksContaineractive" : ""
            }`}
          >
            {isAuthenticated && (
              <>
              <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
                onClick={handleHamburger}
              >
                <span>
                  <i className="fa-solid fa-house navLinkIcon"></i>Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
                onClick={handleHamburger}
              >
                <span> 
                    <i className="fa-solid fa-book-open  navLinkIcon"></i>
                    Courses
                  </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/roadmap"
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
                onClick={handleHamburger}
              >
              <span>
                    <i className="fa-solid fa-route navLinkIcon" ></i>
                    Roadmap
                  </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
                onClick={handleHamburger}
              >
                <span>
                <i className="fa-solid fa-address-card"></i> About
                  </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/enrollecourses"
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
                onClick={handleHamburger}
              >
                <span>
                <i className="fa-solid fa-graduation-cap"></i> Enrolled
                  </span>
              </NavLink>
            </li>
              </>
            )}
            <li className="Account-cont">
              <div
                className="Account"
                onMouseEnter={handleAccountMouseEnter}
                onMouseLeave={handleAccountMouseLeave}
              >
               <i className="fa-solid fa-user"></i> <i className="fa-solid fa-caret-down"></i>
              </div>
              {isOpen && (
                <ul
                  className="account-dropdown"
                  onMouseEnter={handleAccountMouseEnter}
                  onMouseLeave={handleAccountMouseLeave}
                >
                { isAuthenticated ?<li>
                    <Link to="/Login" >
                    <button onClick={handleHamburgerLogOut} className="logoutbtn">
                      Logout
                    </button>
                    </Link>
                  </li>: location?.pathname !=="/Login" ? <li>
                    <Link to="/Login" onClick={handleHamburger}>
                      Login
                    </Link>
                  </li>:
                  <li>
                    <Link to="/Signup" onClick={handleHamburger}>
                      Signup
                    </Link>
                  </li>}
                </ul>
              )}
            </li>
          </ul>
          <div className="bars" onClick={handleHamburger}>
            <button>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
    
  );
}

export default Navbar;
