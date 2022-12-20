import React, { useState, useEffect } from "react";
import Languages from './components/Languages';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Route from './components/Route';
import Projects from './components/Projects';
import Carousel from './components/Carousel/Carousel';




const App = () => {
  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      <Carousel>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </Carousel>
    </div>
  ) 
}

export default App;

  // return (
  //   <div>
  //     <div>
  //       <NavBar />
  //     </div>
  //     <div>
  //       <Route path="/">
  //         <Profile />
  //       </Route>
  //       <Route path="/Languages">
  //         <Languages />
  //       </Route>
  //       <Route path="/Projects">
  //       </Route>
  //       <Route path="/Blog">
  //         <Blog />
  //       </Route>
  //       <Route path="/Contact">
  //         <Contact />
  //       </Route>
  //     </div>
  //   </div>
  // )