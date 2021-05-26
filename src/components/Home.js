import React from 'react';
import Footer from "./Footer";

function Landingpage() {
    return ( <> <div className="relative bg-white overflow-hidden">
        <main
            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
                <h1
                    className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">stylist studion</span><br/>
                    <span className="block text-pink-200 xl:inline">by Freja Janzon</span>
                </h1>
                <p
                    className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Diplomerad fransstylist och nagelterapeut. Erbjuder kurser i fransförlängning ✨
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
            </div>
        </main>

        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://cdn.pixabay.com/photo/2017/06/24/02/56/art-2436545_1280.jpg"
                alt="flowergirl"/>
        </div>
    </div> < div className = "py-12 bg-white" > <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
            <h2 className="text-base text-pink-200 font-semibold tracking-wide uppercase">Om oss</h2>
            <p
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Jag erbjuder följande
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
                cupiditate veritatis in accusamus quisquam.
            </p>
        </div>

        <div className="mt-10">
            <dl
                className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                    <dt>
                        <div
                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-100 text-white">

                            <h1>👁️</h1>

                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Lashlift</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                        perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </dd>
                </div>

                <div className="relative">
                    <dt>
                        <div
                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-100 text-white">

                            <h1>💆</h1>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Browlift</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                        perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </dd>
                </div>

                <div className="relative">
                    <dt>
                        <div
                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-100 text-white">

                            <h1>📏</h1>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Fransförlängning</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                        perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </dd>
                </div>

                <div className="relative">
                    <dt>
                        <div
                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-100 text-white">

                            <h1>💅</h1>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Naglar</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                        perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </dd>
                </div>
            </dl>
        </div>
    </div> </div>


<Footer/> </>)
}

export default Landingpage;