import React, { useState, useEffect } from "react";
import './Projects.css';
const projects = [
	{ id: 1, title: "Reverb", description: "Lorem minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupiprojectst non pt laborum.", img: "/src/images/programmer-unicycle.jpg", img: "https://raw.githubusercontent.com/nathanpare/reverb-project/main/docs/Home%20Page.png", complete: true },		
	{ id: 2, title: "Scheduler", img: "/src/images/scheduler-screenshot.jpg", url: "https://github.com/Robert812218/Scheduler", description: "A single page application for tracking students' interviews. Utilizing React built-in and custom hooks, users are able to add, edit, and delete appointments in real time. projects is persisted by the API server using a PostgreSQL projectsbase. Test driven development is employed to ensure best practices.", img: "https://raw.githubusercontent.com/yuzhakova/scheduler/master/docs/book-new-apt.png", complete: true },		
  { id: 3, title: "Jungle", description: "pa qui officia deserunt mollit anim id est laborum.", img: "https://raw.githubusercontent.com/AliceMathews/jungle/master/docs/products_page.png", url: "https://github.com/Robert812218/Jungle" },
	{ id: 4, title: "Memorizo", img: "https://media.istockphoto.com/id/185244309/photo/work-in-progress.jpg?s=1024x1024&w=is&k=20&c=TLIpmHKPHVRrXp_BbrQFlhbap3NhvSGM8QtSyV6xhEo=", url: "https://github.com/Robert812218/big-brain-linux-machine", description: "pa qui officia deserunt mollit anim id est laborum.", img: "/public/images/programmer-unicycle.jpg", img: "/src/images/programmer-unicycle.jpg", complete: false },		
	{ id: 5, title: "LightBNB", url: "https://github.com/Robert812218/LightBNB", description: "Basically an AirBNB clone written in PostgreSQL.", img: "/src/images/programmer-unicycle.jpg", complete: true },		
	{ id: 6, title: "Tinyapp", url: "https://github.com/Robert812218/Tinyapp", description: "A URL shortener.", img: "/public/images/programmer-unicycle.jpg", complete: true },		

  	
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
      <div className='slider-container'>
        {projects.map((project) => (
          <>
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
          </div>
          </>
        ))}
        
        <button onClick={prev} className='prev'>
          &lt;
        </button>

        <button onClick={next} className='next'>
          &gt;
        </button>
      </div>

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
    </>
  );
}


