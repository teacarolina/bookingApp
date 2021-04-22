import React from 'react';
import {Link} from "react-router-dom";

function Menu() {
    return (
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full md:w-auto">
            <img class="h-8 w-auto sm:h-10" src="https://cdn.pixabay.com/photo/2020/11/09/12/56/eyes-5726595_1280.png"/>
            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <Link to="/" className="font-medium text-gray-500 hover:text-gray-900">Fransar</Link>
                <Link to="/form" className="font-medium text-gray-500 hover:text-gray-900">Gör bokning</Link>
                <Link to="/test" className="font-medium text-gray-500 hover:text-gray-900">Mina bokningar</Link>
                <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">Logga in/Logga ut</Link>
           </div>
            </div>
            </div>
            </div>
            </nav>  
    )
}

export default Menu