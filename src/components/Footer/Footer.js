import React, { useState, useEffect } from 'react';
import Route from '../Route';
import Profile from '../Profile/Profile';
import Languages from '../Languages/Languages';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="row-primary">
        <div className="column-about">

            <h3>Rob Kelly</h3>
            
            <p>
              Lorem ipsum dolor sit amet consetetur adipisicing elit. Vit voluptatem corporis error non,
            </p>

            <div className="social">
                <p>Github</p>
                <p>Linkedin</p>
            </div>
        </div>
        <div className="footer-page-links">
        <ul>
          <li><a href="/">Profile</a></li>
        </ul>
        <ul>
          <li><a href="/Projects">Projects</a></li>
        </ul>
        <ul>
          <li><a href="/Blog">Blog</a></li>
        </ul>
        <ul>
          <li><a href="/Contact">Contact</a></li>
        </ul>
        </div>

        <div className="footer-social-links">
          <a href="https://github.com/Robert812218">GH</a>
          <a href="https://linkedin.com/in/-robert-kelly-/">LI</a>
        </div>
      </div>
    </footer>
  )
}