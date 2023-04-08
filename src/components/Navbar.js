import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" className="social-logo">
              TRVL
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Strona główna
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/apartment"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Apartament
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Galeria
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rules" className="nav-links" onClick={closeMobileMenu}>
                Regulamin
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
            </li>
            <div className="social-icons">
              <Link
                className="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube" />
              </Link>
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
