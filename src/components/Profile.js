import React from "react";
import Languages from './Languages/Languages';




export default function Profile() {
    return (
        <div className="w-fit flex justify-evenly flex-row border-8 space-between border-indigo-600">
            <div className="flex flex-col w-[50vw] ">
                <h4>ABOUT</h4>
                <div className="flex flex-col">
                    <p>Enthusiastic and determined full-stack developer, with a passion for constructing the physical and virtual world. I enjoy building things, solving problems, and challenging projects.</p>
                    
                </div>
            </div>
            <Languages />

        </div>
    )
}

