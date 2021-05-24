import React, {useState} from 'react';
import Modal from 'react-modal';
import axios from "axios";
import {useHistory} from "react-router-dom"

//ändra färg på knappar

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function TreatmentCard({productId, name, price, description, image}) {

  const USERID = localStorage.getItem("userId")
  const USERNAME = localStorage.getItem("username")

  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [userId, setUserId] = useState(USERID)
  const [username, setUsername] = useState(USERNAME)

  const history = useHistory()

  const initalValues = {
    //name: "",
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
      name: username,
      date: newBooking.date,
      telephone: newBooking.telephone,
      userId: userId,
      productId: productId
    }).then( (res)=> history.push("/bokningar"))
  }


  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
    return (
        <>



                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: `url(http://localhost:1337${image.formats.small.url})`}}/* style="background-image: url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')" */>
                            <button onClick={openModal} className="p-2 mx-5 -mb-4 bg-pink-400 text-white text-sm uppercase font-medium rounded hover:bg-pink-600 focus:outline-none focus:bg-blue-500">
Boka                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">{name}</h3>
                            <h5 className="text-gray-500 mt-2">{description}</h5>
                            <span className="text-gray-500 mt-2">{price} SEK</span>
                        </div>
                    </div>
                    <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >

          <button onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="hotpink" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
</svg></button>
          
          <img className="mx-auto h-16 w-auto" src="https://cdn.pixabay.com/photo/2020/11/09/12/56/eyes-5726595_1280.png" alt="eyes"/>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Gör din bokning
              </h2><br/>
          
          <form onSubmit={onHandleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
                {/* <div>
                  <input id="name" name="name" type="text" value={newBooking.name} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Ditt namn"/>
                </div> */}
                <div>
                  <input id="date" name="date" type="datetime-local" value={newBooking.date} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Telefonnummer"/>
                </div>
                <div>
                  <input id="telephone" name="telephone" type="text" value={newBooking.telephone} onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Telefonnummer"/>
                </div>
                </div>
                <div><br/>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Bekräfta
                </button>
              </div>
          </form>
        </Modal>
      
        </>
    )
}

export default TreatmentCard