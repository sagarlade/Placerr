import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-md ${styles.navbar} ${
          scrolled ? styles.navbarScrolled : styles.navbarDefault
        }`}
      >
        <div className="container">
          {/* Brand/logo */}
          <a className={`navbar-brand ${styles.navbarBrand}`} href="#">
            Placerr
          </a>

          {/* Toggler Button */}
          <button
            className={` navbar-toggler ${styles.navbartoggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            style={{ color: "white" }}
          >
            <span
              className={`navbar-toggler-icon ${styles.navbartogglericon}`}
            ></span>
          </button>

          {/* Navbar Buttons */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <button className="btn btn-outline-light me-2" onClick={()=> navigate("./signin")}>Sign In</button>
            <button className="btn btn-primary" onClick={()=> navigate("./dashboard")}>Get Started</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
