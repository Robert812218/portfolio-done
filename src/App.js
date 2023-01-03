import React, { useState, useEffect } from "react";
import './App.css';
// import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
// import Route from './components/Route';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Languages from "./components/Languages/Languages";



function PageContainer() {
  return (
    <div className="app-container">
      <Header />
      <section className="intro">
        <div className="content">
          <Profile />
        </div>
      </section>

      <section id="langs">
          <Languages />
      </section>
      <section id="projects">
        <div className="content">
          <Projects />
        </div>
      </section>


      <section id="contact">
        <div className="content">
          <Contact />
        </div>
      </section>
 
      <footer id="footer">
        {/* <button><a href="">&uarr;</a></button> */}
        <a href="https://github.com/Robert812218" className="footer-icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" className="footer-icon" alt="github icon" />
        </a>

        <a href="https://linkedin.com/li/-robert-kelly-/" >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="footer-icon" alt="linkedin icon" />

        </a>
        <a href="https://codepen.io/Robert812218" >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-plain.svg" className="footer-icon" alt="codepen-icon" />
        </a>
      </footer>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState("");

  useEffect(() => {
  })

  function renderPage() {
    document.getElementById("disclaimer-hero").style.display = "none";
    setPage(!page);
    
  }



  return (
    <div>
      <div id="disclaimer-hero">
        <h1>Disclaimer</h1>
        <h4>This page is still a work in progress. It still needs breakpoints for screen responsiveness, I haven't started on making it fit mobile screens, and there's generally a lot of rough edges with the CSS to get ironed out, and still some JS functionality to add.</h4>
        <h4>You can still see what I've got so far, though. Languages, projects, contact section, etc.</h4>
        <button onClick={renderPage}>GO TO SITE</button>
      </div>
      
      {page && 
        <div>
          <PageContainer />
        </div>}
    </div>
  )
}