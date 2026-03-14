import React from 'react'
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <header class="text-white body-font bg-gray-800 ">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src='/logo.png' className='w-30 rounded-full'></img>
                        <span class="ml-3 text-xl text-white">Syntax<span className='text-green-500'>Studio</span></span>
                    </a>
                    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        {/* <Link to="/about">About Us</Link>
 */}
                        <Link to="/" class="mr-5 hover:text-gray-500" >HOME </ Link>
                        <Link to="/Contact" class="mr-5 hover:text-gray-500" >SERVICES </Link >
                        <Link to="/About" class="mr-5 hover:text-gray-500" >ABOUT </Link >

                    </nav>

                    <Link to="https://www.instagram.com/rana.turab?igsh=MW1wbnh2cmZtYWVsNw== ">
                        <button className='bg-gray-700 rounded-2xl py-5 px-10 hover:bg-gray-800 hidden md:inline-block hover:text-blue-600'>GET IN TOUCH</button>
                    </Link>
                    {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
                    {/* <button class="inline-flex items-center bg-gray-500 border-0 py-3 px-5  text-white focus:outline-none hover:bg-gray-600 rounded text-black-300 mt-4 md:mt-0">
                        Button


                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button> */}
                </div>
            </header>
        </div>
    )
}

export default Navbar
