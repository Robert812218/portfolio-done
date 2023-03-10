import React from "react";
// import Languages from '../Languages/Languages';
import './Profile.css';

export default function Profile() {
    return (
        <div className="profile-container">
                <div className="scroll-arrows"> 
                    <button><a href="#langs">Languages &darr;</a></button>
                    <button><a href="#projects">Projects &darr;</a></button>
                    <button><a href="#contact">Contact &darr;</a></button>
                    <button><a href="#footer">Socials &darr;</a></button>
                </div> 
                <div>
                <p>Enthusiastic and determined full-stack developer, with a passion for constructing the physical and virtual world. I enjoy building things, solving problems, and challenging projects.</p>
                </div> 
    
                <div 
                    className="profile-picture"
                    style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '30em',
                        height: '15em',
                    }}
                ></div>
        </div>
    )
}