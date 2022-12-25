import React from "react";
import Languages from '../Languages/Languages';
import './Profile.css';

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="">
                <h4>ABOUT</h4>
                <div className="">
                    <p>Enthusiastic and determined full-stack developer, with a passion for constructing the physical and virtual world. I enjoy building things, solving problems, and challenging projects.</p>
                    
                </div>
                {/* <img src={require('..public/images/computer-background.png')} alt="photo" width="500" height="500" /> */}
                <p>Image</p>
            </div>
            <Languages />

        </div>
    )
}

