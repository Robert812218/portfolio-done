import React, { useState, useEffect } from "react";
import Blog from './components/Blog';
import Contact from './components/Contact';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Route from './components/Route';
import Carousel from './components/Carousel/Carousel';
import Projects from './components/Projects';
import Pagination from './components/Pagination/Pagination';



// const CarouselPage = () => {
//   return (
//     <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
//       <Carousel>
//         <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
//         <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
//         <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
//       </Carousel>
//     </div>
//   ) 
// }



export default function App() {
  return (
      <div>
         {/* <div>
          <NavBar />
        </div>  */}

        {/* <div>
          <img src={require('./images/programmer-unicycle.jpg')} alt="programmer on fiery unicycle" />
        </div> */}
        <div>
        
        </div>
        <div>
          <Route path="/">
            <Profile />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          {/* <Route path="/Contact">
            <Contact />
          </Route> */}
        </div> 
        <div>
            <Contact />
        </div>
      </div>
  );
}
