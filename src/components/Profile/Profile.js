import React from "react";
import Languages from '../Languages/Languages';
import './Profile.css';

export default function Profile() {
    return (
        <div className="profile-container">
            <h1 className="profile-title">ROBERT KELLY</h1>
            <div className="profile-summary">
            <p>Enthusiastic and determined full-stack developer, with a passion for constructing the physical and virtual world. I enjoy building things, solving problems, and challenging projects.</p>
            </div>
            <div className="image-placeholder">IMAGE</div>
        </div>
    )
}

