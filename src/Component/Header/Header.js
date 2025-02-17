import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false); // State to track if off-canvas is open

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOffCanvasOpen(false); // Close off-canvas when a menu item is clicked
  };

  return (
    <nav
      className={`navbar navbar-expand-md ${
        scrolled ? "bg2 shadow-sm fixed-top" : "bg-transparent top "
      } transition`}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            style={{
              height: scrolled ? "70px" : "100px",
              transition: "height 0.3s ease-in-out",
            }}
          />
        </a>

        {/* Off-Canvas Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOffCanvasOpen(!isOffCanvasOpen)} // Toggle off-canvas state
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Off-Canvas Menu */}
        <div
          className={`offcanvas offcanvas-start w-75 ${
            isOffCanvasOpen ? "show" : ""
          }`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img
                src={logo}
                alt="Logo"
                className="logo"
                style={{
                  height: scrolled ? "70px" : "100px",
                  transition: "height 0.3s ease-in-out",
                }}
              />
            </a>
            <button
              type="button"
              className="btn-close"
              onClick={() => setIsOffCanvasOpen(false)} // Close off-canvas when close button is clicked
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "#about" },
                { name: "Organizer", link: "#organizer" },
                { name: "Concept", link: "#concept" },
                { name: "Benefits", link: "#benefits" },
                { name: "Highlights", link: "#highlights" },
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className="nav-link text-white font2"
                    href={item.link}
                    onClick={handleNavClick} // Close off-canvas when a menu item is clicked
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .transition {
            transition: background-color 0.3s ease-in-out;
          }
        `}
      </style>
    </nav>
  );
};

export default Header;
