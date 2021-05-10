import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import {useHistory} from "react-router-dom"


//använder inte just nu utan ligger under card som modal, lägg till functions där

function BookingForm() {
    
    const history = useHistory()

    const initalValues = {
      name: "",
      date: "",
      telephone: 0
    }

    const [newBooking, setNewBooking] = useState(initalValues)

    function onHandleChange(e) {
      setNewBooking({...newBooking, [e.target.name]:e.target.value})
    }

    function onHandleSubmit(e) {
      e.preventDefault()
      axios.post("http://localhost:1337/bookings", {
        name: newBooking.name,
        date: newBooking.date,
        telephone: newBooking.telephone
      }).then( (res)=> history.push("/bokningar"))
    }

    return(
        <>
        <Header/>

        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-16 w-auto" src="https://cdn.pixabay.com/photo/2020/11/09/12/56/eyes-5726595_1280.png" alt="Workflow"/>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Gör din bokning
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={onHandleSubmit} method="POST">
              <input type="hidden" name="remember" value="true"/>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <input id="name" name="name" type="text" value={newBooking.name} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Ditt namn"/>
                </div>
                <div>
                  <input id="date" name="date" type="datetime-local" value={newBooking.date} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Telefonnummer"/>
                </div>
                <div>
                  <input id="telephone" name="telephone" type="text" value={newBooking.telephone} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Telefonnummer"/>
                </div>
              </div>
              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Bekräfta
                </button>
              </div>
            </form>
          </div>
        </div>

        <Footer/>
        </>
        )
}

export default BookingForm;