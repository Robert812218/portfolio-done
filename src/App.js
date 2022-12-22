import React, { useState, useEffect } from "react";
import Blog from './components/Blog';
import Contact from './components/Contact';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Route from './components/Route';
import Carousel from './components/Carousel/Carousel';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

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

// function Header() {
//   return (
//     <header>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
//         <div className="px-6 w-full flex flex-wrap items-center justify-between">
//           <div className="flex items-center">
//             <button
//               className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
//               type="button" data-bs-toggle="collapse">

//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   )
// }
 



export default function App() {
  return (
      <div>


        <div>
          <Header />
        </div>

        <div>
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
          <Route path="/Contact">
            <Contact />
          </Route>
        </div> 
        </div>
        <div>
            <Footer />
        </div>
      </div>
  );
}
