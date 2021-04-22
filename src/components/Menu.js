import React from 'react';
import {Link} from "react-router-dom";

function Menu() {
    return (
        <>
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full md:w-auto">
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"/>
            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <Link to="/" className="font-medium text-gray-500 hover:text-gray-900">CardList</Link>
                <Link to="/form" className="font-medium text-gray-500 hover:text-gray-900">Lägg till</Link>
                <Link to="/test" className="font-medium text-indigo-600 hover:text-indigo-500">Test</Link>
           </div>
            </div>
            </div>
            </div>
            </nav>  
        </>
    )
}

export default Menu