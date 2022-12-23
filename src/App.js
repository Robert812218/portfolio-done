import React, { useState, useEffect } from "react";
import Blog from './components/Blog';
import Contact from './components/Contact';
import Profile from './components/Profile';
// import NavBar from './components/NavBar';
import Route from './components/Route';
// import Carousel from './components/Carousel/Carousel';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

 


export default function App() {
  return (
      <div className="flex flex-col h-[100%]">
        <div className="h-[15vh] justify-items-stretch">
          <Header />
        </div>
        <div className="h-[70vh] justify-self-stretch w-full">
          <Route path="/">
            <Profile />
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
        <div className="h-[15vh] justify-self-end b-red">
          <Footer />
        </div>
      </div>
  );
}
