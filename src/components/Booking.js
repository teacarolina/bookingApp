import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios';
import BookingCard from "./BookingCard"

function Booking() {

    const USERNAME = localStorage.getItem("username")
    const USEREMAIL = localStorage.getItem("userEmail")
    const USERID = localStorage.getItem("userId")
    
    const [token, setToken] = useState(localStorage.getItem("jwt"))
    const [bookings, setBookings] = useState([])
    const [username, setUsername] = useState(USERNAME)
    const [userEmail, setUserEmail] = useState(USEREMAIL)
    const [userId, setUserId] = useState(USERID)

    useEffect(()=> {
      const fetchBookings = async()=> {
        const response = await axios.get(`http://localhost:1337/bookings?userId.id=${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
        setBookings(response.data)
      }

      fetchBookings()
    }, [])

    return (
      <>
      <Header/>

<div className="bg-gray-100">
 <div className="w-full text-black bg-main-color">
        <div x-data="{ open: false }"
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="p-4 flex flex-row items-center justify-between">
                <h1
                    className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">
                      Mina Sidor
                    </h1>
            </div>
            <nav /* :className="{'flex': open, 'hidden': !open} "</div>*/
                className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
               
                   
                    
            </nav>
        </div>
    </div>
{/*     <!-- End of Navbar -->
 */}
    <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
{/*             <!-- Left Side -->
 */}            <div className="w-full md:w-3/12 md:mx-2">
{/*                 <!-- Profile Card -->
 */}                <div className="bg-white p-3 border-t-4 border-pink-400">
                   
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{username}</h1>
                    <h3 className="text-gray-600 font-lg text-semibold leading-6">Lorem ipsum dolor </h3>
                    <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                    <ul
                        className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3">
                            <span>Status</span>
                            <span className="ml-auto"><span
                                    className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li className="flex items-center py-3">
                            <span>Medlem sedan</span>
                            <span className="ml-auto">Nov 07, 2016</span>
                        </li>
                    </ul>
                </div>
{/*                 <!-- End of profile card -->
 */}               
         </div>
{/*             <!-- Right Side -->
 */}            <div className="w-full h-auto md:w-9/12 mx-2 h-64">
{/*                 <!-- Profile tab -->
 */}{/*                 <!-- About Section -->
 */}                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">Kontaktinformation</span>
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Förnamn</div>
                                <div className="px-4 py-2">Jane</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Efternamn</div>
                                <div className="px-4 py-2">Doe</div>
                            </div>
                            
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Telefonnummer</div>
                                <div className="px-4 py-2">+11 998001001</div>
                            </div>
                           
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Emailadress</div>
                                <div className="px-4 py-2">
                                    <a className="text-blue-800" href="mailto:jane@example.com">{userEmail}</a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Födelsedag</div>
                                <div className="px-4 py-2">Feb 06, 1998</div>
                            </div>
                        </div>
                    </div>
            
                </div>

                
{/*                 <!-- End of about section -->
 */}<div className="bg-white p-3 shadow-sm rounded-sm">
    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">Mina bokningar</span>
                    </div>
                    <div className="flex items-center flex-wrap space-x-2 font-semibold text-gray-900 leading-8">
               
               
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
    
      <Footer/>
    
      </>
    )
}

export default Booking;