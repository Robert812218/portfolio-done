import React, { useState, useEffect } from "react";
import './Projects.css';
const projects = [
	{ id: 1, title: "Reverb", img: "/src/images/reverb-screenshot.jpg", url: "https://github.com/Robert812218/Reverb", description: "Lorem minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupiprojectst non pt laborum.", complete: true },		
	{ id: 2, title: "Scheduler", img: "/src/images/scheduler-screenshot.jpg", url: "https://github.com/Robert812218/Scheduler", description: "A single page application for tracking students' interviews. Utilizing React built-in and custom hooks, users are able to add, edit, and delete appointments in real time. projects is persisted by the API server using a PostgreSQL projectsbase. Test driven development is employed to ensure best practices.", complete: true },		
	{ id: 3, title: "Memorizo", img: "src/images/in-progress.jpg", url: "https://github.com/Robert812218/big-brain-linux-machine", description: "pa qui officia deserunt mollit anim id est laborum.", img: "/src/images/in-progress.jpg", complete: false },		
	{ id: 4, title: "LightBNB", url: "https://github.com/Robert812218/LightBNB", description: "Basically an AirBNB clone written in PostgreSQL.", complete: true },		
	{ id: 5, title: "Tinyapp", url: "https://github.com/Robert812218/Tinyapp", description: "A URL shortener.", complete: true },		
	{ id: 6, title: "SnekMultiplayer", url: "https://github.com/Robert812218/snek-multiplayer", description: "A terminal based Snake implementation written in Node.js.", complete: true },		
]


export default function Projects() {
  // show the project with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next project
  // if we are at the end, go to the first project
  const next = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  // move to the previous project
  // if we are at the beginning, go to the last project
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  return (
    <>
      {/* Render the carousel */}
      <div className='slider-container'>
        {projects.map((project) => (
          <div
            key={project.id}

            // if the project is the current project, show it
            className={
              projects[currentIndex].id === project.id ? 'fade' : 'slide fade'
            }
          >
            <img src={project.url} alt={project.title} className='project' />
            <div className='caption'>{project.title}</div>
          </div>
        ))}

        {/* Previous button */}
        <button onClick={prev} className='prev'>
          &lt;
        </button>

        {/* Next button */}
        <button onClick={next} className='next'>
          &gt;
        </button>
      </div>

      {/* Render dots indicator */}
      <div className='dots'>
        {projects.map((project) => (
          <span
            key={project.id}
            // highlight the dot that corresponds to the current project
            className={
              projects[currentIndex].id === project.id ? 'dot active' : 'dot'
            }
            // when the user clicks on a dot, go to the corresponding project
            onClick={() => setCurrentIndex(projects.indexOf(project))}
          ></span>
        ))}
      </div>
    </>
  );
}



// export default function Projects() {



// 	return (
// 		<div className="projects-component">
// 			<div className="projects-area">
// 				{projects.map((project) => (
// 					<div className="project-container">
// 						<div className="project-project"></div>
// 						<h2>{project.title}</h2>
// 						<div className="project-slide">
// 							<p>{project.description}</p>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	)
// }

