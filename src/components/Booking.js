import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios';
import BookingCard from "./BookingCard"

function Booking() {

    const [bookings, setBookings] = useState([])

    useEffect(()=> {
      const fetchBookings = async()=> {
        const response = await axios.get("http://localhost:1337/bookings")
        setBookings(response.data)
      }

      fetchBookings()
    }, [])

    return (
      <>
      <Header/>

<div class="bg-gray-100">
 <div class="w-full text-black bg-main-color">
        <div x-data="{ open: false }"
            class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div class="p-4 flex flex-row items-center justify-between">
                <h1
                    class="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">
                      Mina Sidor
                    </h1>
            </div>
            <nav /* :class="{'flex': open, 'hidden': !open} "</div>*/
                class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
               
                   
                    
            </nav>
        </div>
    </div>
{/*     <!-- End of Navbar -->
 */}
    <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
{/*             <!-- Left Side -->
 */}            <div class="w-full md:w-3/12 md:mx-2">
{/*                 <!-- Profile Card -->
 */}                <div class="bg-white p-3 border-t-4 border-pink-400">
                   
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">Username</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">Lorem ipsum dolor </h3>
                    <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Medlem sedan</span>
                            <span class="ml-auto">Nov 07, 2016</span>
                        </li>
                    </ul>
                </div>
{/*                 <!-- End of profile card -->
 */}               
         </div>
{/*             <!-- Right Side -->
 */}            <div class="w-full h-auto md:w-9/12 mx-2 h-64">
{/*                 <!-- Profile tab -->
 */}{/*                 <!-- About Section -->
 */}                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">Kontaktinformation</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Förnamn</div>
                                <div class="px-4 py-2">Jane</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Efternamn</div>
                                <div class="px-4 py-2">Doe</div>
                            </div>
                            
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Telefonnummer</div>
                                <div class="px-4 py-2">+11 998001001</div>
                            </div>
                           
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Emailadress</div>
                                <div class="px-4 py-2">
                                    <a class="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Födelsedag</div>
                                <div class="px-4 py-2">Feb 06, 1998</div>
                            </div>
                        </div>
                    </div>
            
                </div>

                
{/*                 <!-- End of about section -->
 */}<div class="bg-white p-3 shadow-sm rounded-sm">
    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">Mina bokningar</span>
                    </div>
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
               
               
                 {bookings.map((product)=> {
        return(
          <BookingCard key={product.id} name={product.name} date={product.date} telephone={product.telephone}/>
        )
      })}


               {/*  <!-- End of profile tab --> */}
            </div>
        </div>
    </div>
</div>
</div>
</div>
        {/* <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-max">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Södermalmsfrisör
                </h3>
                <div className="mt-2">
                <p className="text-sm text-gray-500">
                2000sek
                </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
          Avboka
          </button>
          <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
          Boka om
          </button>
          </div>
        </div>

        ta bort den här delen under 
        <br/>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-max">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
           
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">

              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Södermalmsfrisör
              </h3>
              <div className="mt-2">
                  
                <p className="text-sm text-gray-500">
                    2000sek
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          
          <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
          Avboka
          </button>
          <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
          Boka om
          </button>
        </div>
        </div> */}
      <Footer/>
    
      </>
    )
}

export default Booking;