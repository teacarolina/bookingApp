import React, {useState, useEffect} from 'react';
import axios from "axios";
import TreatmentInfo from '../treatmentpage/TreatmentInfo';

function BookingCard({bookingId, name, date, telephone}) {

    const userId = localStorage.getItem("userId")

    const [treatments, setTreatments] = useState([])
    const [token, setToken] = useState(localStorage.getItem("jwt"))

    useEffect(()=> {
        const fetchTreatments = async()=> {
        const response = await axios.get(`http://localhost:1337/products?bookingId=${bookingId}`)
        setTreatments(response.data)
      }

      fetchTreatments()
    }, [])

function onHandleSubmit(e) {
    e.preventDefault()
    if(userId!=="facebook"){
    axios.delete(`http://localhost:1337/bookings/${bookingId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }).then( (res)=> window
    .location
    .reload())
    //tillfällig lösning på att sidan behöver reloadas
}else{
    axios.delete(`http://localhost:1337/bookings-open-auths/${bookingId}`).then( (res)=> window
    .location
    .reload())
}} 

    return ( <> <div
        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-max">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Stylist Studion
                    </h3>
                    <p className="text-sm text-gray-500">{name}</p>
                    <p className="text-sm text-gray-500">{date}</p>
                    <p className="text-sm text-gray-500">0{telephone}</p>
                    <div className="mt-2">
                        
                    {treatments.map((treatments)=>{
        return(
          
          <TreatmentInfo key={treatments.id} name={treatments.name} price={treatments.price}/>
          
        )
      })}
                            
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
                type="button" onClick={onHandleSubmit}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Avboka
            </button>
            <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-200 text-base font-medium text-white hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Boka om
            </button>
        </div>
    </div> </>
    )
}

export default BookingCard;