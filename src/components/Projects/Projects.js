import React, { useState, useEffect } from "react";
import './Projects.css';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const projects = [
	{ id: 1, title: "Reverb", description: `${loremIpsum}`, img: "/src/images/programmer-unicycle.jpg", img: "https://raw.githubusercontent.com/nathanpare/reverb-project/main/docs/Home%20Page.png", complete: true },		
	{ id: 2, title: "Scheduler", img: "/src/images/scheduler-screenshot.jpg", url: "https://github.com/Robert812218/Scheduler", description: "A single page application for tracking students' interviews. Utilizing React built-in and custom hooks, users are able to add, edit, and delete appointments in real time. projects is persisted by the API server using a PostgreSQL projectsbase. Test driven development is employed to ensure best practices.", img: "https://raw.githubusercontent.com/yuzhakova/scheduler/master/docs/book-new-apt.png", complete: true },		
  { id: 3, title: "Jungle", description: "A mini e-commerce application built with Rails.", img: "https://raw.githubusercontent.com/AliceMathews/jungle/master/docs/products_page.png", url: "https://github.com/Robert812218/Jungle" },
	{ id: 4, title: "Memorizo", img: "https://media.istockphoto.com/id/185244309/photo/work-in-progress.jpg?s=1024x1024&w=is&k=20&c=TLIpmHKPHVRrXp_BbrQFlhbap3NhvSGM8QtSyV6xhEo=", url: "https://github.com/Robert812218/big-brain-linux-machine", description: "pa qui officia deserunt mollit anim id est laborum.", img: "https://www.boilermakers.ca/wp-content/uploads/2018/01/UnderConstruct.jpg", complete: false },		
	{ id: 5, title: "LightBNB", url: "https://github.com/Robert812218/LightBNB", description: "An AirBNB clone written in PostgreSQL.", img: "https://raw.githubusercontent.com/mjstaus/LightBnB/master/LightBnB_WebApp-master/docs/LightBnB.drawio.png", complete: true },		
	{ id: 6, title: "Tinyapp", url: "https://github.com/Robert812218/Tinyapp", description: "A URL shortener.", img: "https://raw.githubusercontent.com/caitlining/tinyapp/master/docs/short-url-display-page-no-user.png", complete: true },		

  	
]


export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function next () {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  function prev() { 
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  // const bg1 = require("src/images/programmer-unicycle.jpg")
  return (
    <>
        <div className='projects-slider-container'>
        
        {projects.map((project) => (
          <>
            {/* <div className="project-description">{project.description}</div> */}
          <div
            style={{
              backgroundImage: `url(${project.img})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
            }}
            key={project.id}
            
            className={
              projects[currentIndex].id === project.id ? 'fade' : 'slide fade'
            }
          >
            <div className='caption'>{project.title}</div>
            
            <div className="fade2" id="project-description">{project.description}</div>
            
          </div>
          

          </>
        ))}
        <button onClick={prev} className='prev'>
          &lt;
        </button>

        <button onClick={next} className='next'>
          &gt;
        </button>
        

        <div className='dots'>
        {projects.map((project) => (
          <span
            key={project.id}
            className={
              projects[currentIndex].id === project.id ? 'dot active' : 'dot'
            }
            onClick={() => setCurrentIndex(projects.indexOf(project))}
          ></span>
        ))}

      </div>
    
      </div>


    </>
  );
}