import React from "react";


export default function Contact() {
    return (
        <div>
<body class="bg-white dark:bg-gray-900">
    <form action="post" class="my-20 p-10 max-w-xl mx-auto shadow-md sm:border-0 md:border md:border-gray-900 md:dark:border-gray-100 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <div class="mb-10">
            <h1 class="font-bold text-4xl mb-3">Get in touch</h1>
            <p class="font-medium text-lg mb-5">Send us a quick message and we'll get back to you shortly.</p>
            <hr class="border-gray-900 dark:border-gray-100" />
        </div>
        <div class="mb-5">
            <label for="message" class="text-lg flex justify-between items-end"><span>Message</span><span class="text-xs text-red-500">Required</span></label>
            <textarea name="message" id="message" cols="30" rows="10" class="shadow-md mt-1 block w-full sm:text-sm rounded-none border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900"></textarea>
        </div>
        <div class="mb-5">
            <label for="name" class="text-lg flex justify-between items-end"><span>Name</span><span class="text-xs text-red-500 ">Required</span></label>
            <div class="mt-1 flex shadow-md">
                <span class="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100"><i class="fas fa-user"></i></span>
                <input type="text" name="name" class="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900" />
            </div>
        </div>
        <div class="mb-5">
            <label for="email" class="text-lg flex justify-between items-end"><span>Email</span><span class="text-xs text-red-500">Required</span></label>
            <div class="mt-1 flex shadow-md">
                <span class="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100"><i class="fas fa-envelope"></i></span>
                <input type="email" name="email" class="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900" />
            </div>
        </div>
        <div>
            <button type="button" class="font-medium shadow-md rounded-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-900 dark:border-gray-100 bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 hover:bg-gray-900 dark:hover:bg-gray-100"><i class="fas fa-check"></i> Send</button>
        </div>
    </form>
</body>
        </div>
    )
}

// export default function Contact() {
//   return (
//     <section class="bg-white dark:bg-gray-900 w-[70vh]">
//     <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//         <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact </h2>
//         <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Get In Touch</p>
//         <form action="https://formspree.io/f/mpzeaqjb" method="post" class="space-y-8">
//             <div>
//                 <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
//                 <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name@email.ca" required />
//             </div>
//             <div>
//                 <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
//                 <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Topic" required />
//             </div>
//             <div class="sm:col-span-2">
//                 <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
//                 <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
//             </div>
//             <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
//         </form>
//     </div>

//   </section>  
//   );
// }


