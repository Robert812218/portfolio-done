import React from "react";
import './Header.css';

export default function Header() {
  return (
    <header className="header">

      <h2 className="header-title">ROBERT KELLY</h2>

      <nav className="navbar">
        <div className="page-links">
          <a href="/">Profile</a>
          <a href="/Projects">Projects</a>
          <a href="/Blog">Blog</a>
          <a href="/Contact">Contact</a>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/Robert812218">GH</a>
          <a href="https://linkedin.com/in/-robert-kelly-/">LI</a>
        </div>
      </nav>

    </header>
  )
}
