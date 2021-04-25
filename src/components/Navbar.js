import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav class="bg-pink-100">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">

              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* hamburger menu */}
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
     
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
        
                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                  {/* to here */}
              </div>

              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                <img class="block lg:hidden h-8 w-auto" src="https://cdn.pixabay.com/photo/2020/11/09/12/56/eyes-5726595_1280.png"/>
                <img class="hidden lg:block h-8 w-auto" src="https://cdn.pixabay.com/photo/2020/11/09/12/56/eyes-5726595_1280.png"/>
                </div>
                <div class="hidden sm:block sm:ml-6">
                  <div class="flex space-x-4">
                    <Link to="/" className="bg-gray-900 text-pink-100 px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Startsida</Link>
                    <Link to="/behandlingar" className="text-gray-900 hover:bg-pink-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Behandlingar</Link>
                    <Link to="/form" className="text-gray-900 hover:bg-pink-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Gör bokning</Link>
                    <Link to="/bokningar" className="text-gray-900 hover:bg-pink-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Mina bokningar</Link>
                  </div>
                </div>
              </div>
              
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link to="#" className="bg-gray-900 text-pink-100 px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Logga in</Link>
              </div>
            </div>
          </div>
        
          <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="bg-gray-900 text-pink-100 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Startsida</Link>
                <Link to="/behandlingar" className="text-gray-900 hover:bg-pink-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Behandlingar</Link>
                <Link to="/form" className="text-gray-900 hover:bg-pink-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Gör bokning</Link>
                <Link to="/bokningar" className="text-gray-900 hover:bg-pink-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Mina bokningar</Link>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;