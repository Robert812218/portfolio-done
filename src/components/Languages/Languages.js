import React, { useState } from 'react';
import './Languages.css';
const data = [
    { id: 1, language: "Javascript", framework: "React.js" },
    { id: 2, language: "Elixir", framework: "Phoenix" },
    { id: 3, language: "ClojureScript", framework: "Reagent" },
    { id: 4, language: "Flutter", framework: "Dart" },
    { id: 5, language: "Python", framework: "Django" },
    { id: 6, language: "Ruby", framework: "Rails" },
    { id: 7, language: "C#", framework: ".NET" },
    { id: 8, language: "SQL", framework: "PostgreSQL" },
    { id: 9, language: "Vim", framework: "N/A" },
    { id: 10, language: "Git", framework: "Github" },
    { id: 11, language: "Blender", framework: "N/A" },
]




export default function Languages() {



    return (
         <div>
            <h1>Languages, Frameworks, and Technologies</h1>
            
            <div className="languages-container">
                <p>
                    Lorem ipsum solor and so on
                    <div>
                        <div></div>
                    </div>
                </p>
            </div>

            <ul className="">
                {data.map((lang) => (
                    <li className="">
                        <div className="">
                            {lang.language}, Framework: {lang.framework} 

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

