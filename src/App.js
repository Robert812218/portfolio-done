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


  export default function App() {
  return (
      <body className="app-container">

        <div>
          <Header />
        </div>

        <div className="page-container">
          <Route path="/">
            <Profile />
          </Route>
          <Route path="/Languages">
            <Languages />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </div> 

        <div>
          <Footer />
        </div>

      </body>
  );
}


