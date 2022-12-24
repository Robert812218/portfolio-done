import React from "react";
import Carousel from './Carousel/Carousel';

const CarouselPage = () => {
	return (
	  <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
		<Carousel>
			<div>
		  		<img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg" alt="placeholder" />
			</div>
		  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1Bkdhd3PmkvIewfKTUC0sfjORaRnyfgy0w&usqp=CAU" alt="placeholder" />
		  <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
		  
		</Carousel>
	  </div>
	) 
}
  


export default function Projects() {
	const data = [
		{ id: 1, title: "Reverb", img: "/src/images/reverb-screenshot.jpg", url: "https://github.com/Robert812218/Reverb", description: "Lorem minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non pt laborum.", complete: true },		
		{ id: 2, title: "Scheduler", img: "/src/images/scheduler-screenshot.jpg", url: "https://github.com/Robert812218/Scheduler", description: "A single page application for tracking students' interviews. Utilizing React built-in and custom hooks, users are able to add, edit, and delete appointments in real time. Data is persisted by the API server using a PostgreSQL database. Test driven development is employed to ensure best practices.", complete: true },		
		{ id: 3, title: "Memorizo", img: "src/images/in-progress.jpg", url: "https://github.com/Robert812218/big-brain-linux-machine", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: "/src/images/in-progress.jpg", complete: false },		
		{ id: 4, title: "LightBNB", url: "https://github.com/Robert812218/LightBNB", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", complete: true },		
		{ id: 5, title: "Tinyapp", url: "https://github.com/Robert812218/Tinyapp", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", complete: true },		
		{ id: 6, title: "SnekMultiplayer", url: "https://github.com/Robert812218/snek-multiplayer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", complete: true },		
	]



	return (
		<div>

			<h1 className="text-center font-bold text-2xl text-indigo-500">Projects</h1>
		<section className="h-[70vh] w-[90vw] bg-gradient-to-br from-pink-50 to-indigo-100 p-8 border-8 border-indigo-600 overflow-y-scroll">

			<div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7  my-10">
				{data.map((project) => (
					// <img className="h-56 lg:h-69 w-full object-cover src=" />
					<div>
					
						<div className="p-3">
							<h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">{project.title}</h3>
							<p>{project.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
		</div>
	)

}