import React, { useState, useEffect } from "react";
import Languages from './components/Languages';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Route from './components/Route';

export default function App() {
  


  return (
    <div>
      <div>
        <NavBar />
      </div>
      <body>
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
      </body>
    </div>
  )
}
