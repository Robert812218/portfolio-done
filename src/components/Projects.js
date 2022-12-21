import React from "react";
import Carousel from './Carousel/Carousel';

const CarouselPage = () => {
	return (
	  <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
		<Carousel>
		  <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg" alt="placeholder" />
		  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1Bkdhd3PmkvIewfKTUC0sfjORaRnyfgy0w&usqp=CAU" alt="placeholder" />
		  <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
		  
		</Carousel>
	  </div>
	) 
  }
  


export default function Projects() {


	return (
		<div className="bg-[url('./images/horrorshow-background.png')]">
			<CarouselPage />
			<h4>PROJECTS</h4>
			<a href="https://github.com/Robert812218/Reverb">Reverb</a>
			<a href="https://github.com/Robert812218/Reverb">LightBNB</a>
			<a href="https://github.com/Robert812218/Reverb">Memorizo</a>
			<a href="https://github.com/Robert812218/Reverb">Scheduler</a>
			<a href="https://github.com/Robert812218/Reverb">SnekMultiplayer</a>
			<a href="https://github.com/Robert812218/Reverb">Tinyapp</a>
		</div>
	)
}
