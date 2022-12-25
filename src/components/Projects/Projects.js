import React from "react";
import './Projects.css';
  


export default function Projects() {
	const data = [
		{ id: 1, title: "Reverb", img: "/src/images/reverb-screenshot.jpg", url: "https://github.com/Robert812218/Reverb", description: "Lorem minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non pt laborum.", complete: true },		
		{ id: 2, title: "Scheduler", img: "/src/images/scheduler-screenshot.jpg", url: "https://github.com/Robert812218/Scheduler", description: "A single page application for tracking students' interviews. Utilizing React built-in and custom hooks, users are able to add, edit, and delete appointments in real time. Data is persisted by the API server using a PostgreSQL database. Test driven development is employed to ensure best practices.", complete: true },		
		{ id: 3, title: "Memorizo", img: "src/images/in-progress.jpg", url: "https://github.com/Robert812218/big-brain-linux-machine", description: "pa qui officia deserunt mollit anim id est laborum.", img: "/src/images/in-progress.jpg", complete: false },		
		{ id: 4, title: "LightBNB", url: "https://github.com/Robert812218/LightBNB", description: "Basically an AirBNB clone written in PostgreSQL.", complete: true },		
		{ id: 5, title: "Tinyapp", url: "https://github.com/Robert812218/Tinyapp", description: "A URL shortener.", complete: true },		
		{ id: 6, title: "SnekMultiplayer", url: "https://github.com/Robert812218/snek-multiplayer", description: "A terminal based Snake implementation written in Node.js.", complete: true },		
	]



	return (
		<div className="projects-container">
			<h1 className="projects-header">Projects</h1>
			<section>

				<div>
					{data.map((project) => (
						// <img className="h-56 lg:h-69 w-full object-cover src=" />
						<div>
						
							<div>
								<h3>{project.title}</h3>
								<p>{project.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)

}