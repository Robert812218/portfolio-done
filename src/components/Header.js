import React from "react";


export default function Header() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">Robert Kelly</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-white-200 border-white-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
        Profile
      </a>
      <a href="/Projects" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
        Projects
      </a>
      <a href="/Blog" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
        Blog
      </a>
      <a href="/Contact" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
        Contact
      </a>
    </div>
    <div>
      {/* <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
    </div>
  </div>
</nav>
    )
}


// export default function Header() {
//     return (
//         <header className="w-full text-[100%] h-[15vh] bg-black flex flex-col">
//             <div className="text-white flex">
//                 <a href="/" className="text-[5vh]">Profile</a>
//                 <a href="/Projects" className="text-[5vh]">Projects</a>
//                 <a href="/Blog" className="text-[5vh]">Blog</a>
//                 <a href="/Contact" className="text-[5vh]">Contact</a>
//                 <a href="https://github.com/Robert812218" className="text-[5vh]">Github</a>
//             </div>
//         </header>
//     )
//   }
   