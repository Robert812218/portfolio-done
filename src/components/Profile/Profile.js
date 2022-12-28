import React from "react";
import Languages from '../Languages/Languages';
import './Profile.css';

export default function Profile() {
    return (
        <div className="profile-container">
            
                <p>Enthusiastic and determined full-stack developer, with a passion for constructing the physical and virtual world. I enjoy building things, solving problems, and challenging projects.</p>
                <div 
                    className="profile-picture"
                    style={{
                        backgroundImage: `url("https://image-cdn.essentiallysports.com/wp-content/uploads/Randy-Savage-3.png?width=640")`,
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