import React, { useState, useEffect } from 'react';
// import Route from '../Route';
// import Profile from '../Profile/Profile';
// import Languages from '../Languages/Languages';
// import Projects from '../Projects/Projects';
// import Blog from '../Blog/Blog';
// import Contact from '../Contact/Contact';
import './Footer.css';


export default function Footer() {


  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
            <h6>About</h6>



          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/">Profile</a></li>
              <li><a href="/Projects">Projects</a></li>
              <li><a href="/Blog">Blog</a></li>
              <li><a href="/Contact">Get in Touch</a></li>
            </ul>
          </div>
      </div>
      <hr></hr>
    </div>
      <div className="container">
        <div className="row">

          <div className="">
            <ul className="social-icons">
              {/* <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li> */}
              {/* <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li> */}
              Linkedin
              <li><a className="linkedin" href="https://linkedin.com/in/-robert-kelly-/"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
  )
}


