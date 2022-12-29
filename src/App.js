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



function RouteContainer() {
  return (
    <section>
      <Route path="/">
        <Profile />
           </Route>
           <Route path="/Languages">
             <Languages />
           </Route>
           <Route path="/Projects">
             {/* <TestComponent /> */}
             <Projects />
           </Route>
           <Route path="/Blog">
             <Blog />
           </Route>
           <Route path="/Contact">
             <Contact />
           </Route>
    </section>
  )
}

export default function App() {


  return (
    <div className="app-container">
      <Header />
      <section className="intro">
        <div className="content">
          <Profile />
        </div>
      </section>

      <section>
        <div className="content">
          <Languages />
        </div>
      </section>
      <section>
        <div className="content">
          <Projects />
        </div>
      </section>

      {/* <section>
        <div className="content">
          <Blog />
        </div>
      </section> */}

      <section>
        <div className="content">
          <Contact />
        </div>
      </section>

      {/* <footer>
        Add links <a href="https://github.com/Robert812218">GITHUB LOGO</a>
      </footer> */}
    </div>
  )
}