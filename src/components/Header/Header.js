import React from "react";
import './Header.css';

export default function Header() {
  return (
    <header className="header-component">
      <div className="header-wrapper">
        <div className="header-logo">LOGO</div>
        <nav>
          <ul className="header-menu">
            <li><a href="/">Profile</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/Blog">Blog</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="https://github.com/Robert812218" className="header-github-link"><span>GITHUB</span></a></li>
            <li><a href="https://linkedin.com/in/-robert-kelly-/" className="header-linkedin-link"><span>LINKEDIN</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

