import React from "react";

class CustomNavbar extends React.Component {
    render() {
      return(
        <nav id="nav" className="navbar nav-transparent">
        <div className="container">
          <div className="navbar-header">
            <div className="navbar-brand">
              <a href="index.html">
                <img className="logo" src="img/logo.png" alt="logo" />
                <img className="logo-alt" src="img/logo-alt.png" alt="logo" />
              </a>
            </div>
            <div className="nav-collapse">
              <span></span>
            </div>
          </div>
  
          <ul className="main-nav nav navbar-nav navbar-right">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#pricing">Prices</a></li>
            <li><a href="#team">Team</a></li>
            <li className="has-dropdown"><a href="#blog">Blog</a>
              <ul className="dropdown">
                <li><a href="blog-single.html">blog post</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
  
        </div>
      </nav>
      )
    }
  }

  export default CustomNavbar;