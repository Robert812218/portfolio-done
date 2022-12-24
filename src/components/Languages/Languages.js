import React, { useState } from 'react';
import './Languages.css';

function CardPlaceholder() {
    return (

<div role="status" class="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
        <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div class="flex items-center mt-4 space-x-3">
        <svg class="w-14 h-14 text-gray-200 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
        <div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <span class="sr-only">Loading...</span>
</div>

    )
}

function ImagePlaceholder() {
    return (

<div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
    <div class="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
    </div>
    <div class="w-full">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>

    )
}

export default function Languages() {

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

    return (
         <div>
            <h1>LANGS</h1>
            
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((lang) => (
                    <li className="pb-3 sm:pb-4">
                        <div className="flex flex-row">
                            {lang.language}, {lang.framework} 

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


// export default function Languages() {

//     const data = [
//         { id: 1, language: "Javascript", framework: "React.js" },
//         { id: 2, language: "Elixir", framework: "Phoenix" },
//         { id: 3, language: "ClojureScript", framework: "Reagent" },
//         { id: 4, language: "Flutter", framework: "Dart" },
//         { id: 5, language: "Python", framework: "Django" },
//         { id: 6, language: "Ruby", framework: "Rails" },
//         { id: 7, language: "C#", framework: ".NET" },
//         { id: 8, language: "SQL", framework: "PostgreSQL" },
//         { id: 9, language: "Vim", framework: "N/A" },
//         { id: 10, language: "Git", framework: "Github" },
//         { id: 11, language: "Blender", framework: "N/A" },
//     ]

//     return (
//          <div>
//             <h1>LANGS</h1>
            
//             <div>
//                 {data.map((lang) => (
//                     <div>
//                         <h1>{lang.language}</h1>
//                         <h4>{lang.framework}</h4>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

