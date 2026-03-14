import React from 'react'

function Hero() {
    return (
        <div>
            <section class="text-gray-600 body-font bg-gray-200">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-2xl drop-shadow-2xl hover:scale-102 " alt="hero" src="/Capture.png" />
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Responsive Across Every Screen</h1>
                        <p class="mb-8 leading-relaxed text-2xl">From desktops to smartphones, I create fully responsive designs that adapt seamlessly to any device. Flexible grids, scalable components, and thoughtful breakpoints ensure consistency and clarity, no matter how users access the platform.</p>
                        <div class="flex justify-center">
                            <a href="https://www.instagram.com/rana.turab?igsh=MW1wbnh2cmZtYWVsNw== ">

                                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg">Button</button>
                            </a>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-2xl text-lg">Button</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
