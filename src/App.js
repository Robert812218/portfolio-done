import React, { useState, useEffect } from "react";
import './App.css';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import Route from './components/Route';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Languages from "./components/Languages/Languages";
import TestComponent from './components/TestComponent/TestComponent';



function PageContainer() {
  return (
    <div className="app-container">
      <Header />
      <section className="intro">
        <div className="content">
          <Profile />
        </div>
      </section>

      <section>
          <Languages />
      </section>
      <section>
        <div className="content">
          <Projects />
        </div>
      </section>


      <section>
        <div className="content">
          <Contact />
        </div>
      </section>
 
      <footer>
        <a href="https://github.com/Robert812218">Github</a>
        <a href="https://linkedin.com/li/-robert-kelly-/">Linkedin</a>
        <a href="https://codepen.io/Robert812218">Codepen</a>
      </footer>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState("");

  useEffect(() => {
  })

  function renderPage() {
    setPage(!page);
    
  }

  let removeBanner = {

  }

  return (
    <div>
      {/* <div className="disclaimer-hero">
        <button onClick={renderPage}>GO TO PAGE</button>
      </div> */}
      
      {/* {page && 
        <div>
          <PageContainer />
        </div>} */}
        <PageContainer />
    </div>
  )
}