import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios';
import Modal from 'react-modal';
import BookingCard from "./BookingCard";
import {useHistory} from "react-router-dom";

function Booking() {


    const initialValues = {
        name: "",
        description: "",
        price: "",
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    const initalBookingValues = {
        name: "",
        description: "",
        price: "",
    }

    const [changeTreatment,
        setChangeTreatment] = useState(initalBookingValues)

    const USERNAME = localStorage.getItem("username")
    const USEREMAIL = localStorage.getItem("userEmail")
    const USERID = localStorage.getItem("userId")
    const ADMIN = localStorage.getItem("admin")

    const [allTreatments,
        setAllTreatments] = useState([])

    //is assigned value but never used
    const [token,
        setToken] = useState(localStorage.getItem("jwt"))
    const [bookings,
        setBookings] = useState([])
    const [username,
        setUsername] = useState(USERNAME)
    const [userEmail,
        setUserEmail] = useState(USEREMAIL)
    const [userId,
        setUserId] = useState(USERID)
        const [modalIsOpen,
            setIsOpen] = React.useState(false);
    
        const [treatment,
            setTreatment] = useState(initialValues)
        const [fileData,
            setFileData] = useState()
        const history = useHistory()
    
        function onHandleChange(e) {
            setTreatment({
                ...treatment,
                [e.target.name]: e.target.value
            })
        }

        function onHandleChangeTreatment(e) {
            setChangeTreatment({...changeTreatment, [e.target.name]:e.target.value})
        }
    
        function onHandleChangeImg(e) {
            setFileData(e.target.files[0])
        }
    
        function onHandleSubmit(e) {
            e.preventDefault()
            axios
                .post("http://localhost:1337/products", {
                name: treatment.name,
                description: treatment.description,
                price: treatment.price
            })
                .then((res) => {
                    const data = new FormData()
                    data.append("files", fileData)
                    data.append("ref", "product")
                    data.append("field", "img")
                    data.append("refId", res.data.id)
                    axios.post("http://localhost:1337/upload", data)
                })
                .then(history.push("/"))
        }

        function deleteBooking(id) {
            //e.preventDefault()
            axios.delete(`http://localhost:1337/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then( (res)=> window
            .location
            .reload())
            //tillfällig lösning på att sidan behöver reloadas
          }

    //has missing dependencies, either include them or remove the dependency array
    useEffect(() => {
        const fetchBookings = async() => {
            const response = await axios.get(`http://localhost:1337/bookings?userId.id=${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setBookings(response.data)
        }

        fetchBookings()
    }, [])

    useEffect(() => {
        const fetchAllTreatments = async() => {
            const responseAll = await axios.get(`http://localhost:1337/products`)
            setAllTreatments(responseAll.data)
        }

        fetchAllTreatments()
    }, [])

    function openModal(id) {
            setIsOpen(true)
            localStorage.setItem("changeId", id)
    }

    function closeModal() {
        setIsOpen(false);
    }

    function onHandleSubmitChange(id) {
//Form submission canceled because the form is not connected?
axios
.put(`http://localhost:1337/products/${id}`, {
name: changeTreatment.name,
description: changeTreatment.description,
price: changeTreatment.price
}).then(history.push("/"))
    }

    return ( <> <Header/> <div className="bg-gray-100"> <div className="w-full text-black bg-main-color">
        <div
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="p-4 flex flex-row items-center justify-between">
                <h1
                    className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">
                    Mina Sidor
                </h1>
            </div>
            <nav
                className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row"></nav>
        </div>
    </div> <div className="container mx-auto my-5 p-5"> <div className="md:flex no-wrap md:-mx-2">

        <div className="w-full md:w-3/12 md:mx-2">

            <div className="bg-white p-3 border-t-4 border-pink-400">
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{username}</h1>
                <h3 className="text-gray-600 font-lg text-semibold leading-6">Lorem ipsum dolor
                </h3>
                <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum
                    sequi illum qui unde aspernatur non deserunt</p>
                <ul
                    className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li className="flex items-center py-3">
                        <span>Status</span>
                        <span className="ml-auto">
                            <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span>
                        </span>
                    </li>
                    <li className="flex items-center py-3">
                        <span>Medlem sedan</span>
                        <span className="ml-auto">Nov 07, 2016</span>
                    </li>
                </ul>
            </div>

        </div>
        {ADMIN === "true" ? <div className="w-full h-auto md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
                <div
                    className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span clas="text-green-500">
                        <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                    </span>
                    <span className="tracking-wide">Lägg till behandling</span>
                 
                </div>
                <form onSubmit={onHandleSubmit} method="POST">
                <div className="bg-white shadow rounded-lg p-6">        
    <div className="grid lg:grid-cols-2 gap-6">
        
      <div className="border focus-within:border-pink-500 focus-within:text-pink-500 transition-all duration-500 relative rounded p-1">
      
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
        
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">Behandlingens namn *</label>
          </p>
        </div>
        <p>
          <input id="name" name="name" value={treatment.name}
                        onChange={onHandleChange} autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border focus-within:border-pink-500 focus-within:text-pink-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="price" className="bg-white text-gray-600 px-1">Pris *</label>
          </p>
        </div>
        <p>
          <input id="price" name="price" value={treatment.price}
                        onChange={onHandleChange} autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border focus-within:border-pink-500 focus-within:text-pink-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="description" className="bg-white text-gray-600 px-1">Beskrivning *</label>
          </p>
        </div>
        <p>
          <input id="description" name="description" value={treatment.description}
                        onChange={onHandleChange} autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border focus-within:border-pink-500 focus-within:text-pink-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="file" className="bg-white text-gray-600 px-1">Bild *</label>
          </p>
        </div>
        <p>
          <input id="file" name="file" onChange={onHandleChangeImg} autoComplete="false" tabIndex="0" type="file" className="py-1 px-1 outline-none block h-full w-full"/>
        </p>
      </div>
    </div>
    <div className="border-t mt-6 pt-3">
      <button className="rounded text-gray-100 px-3 py-1 bg-pink-500 hover:shadow-inner hover:bg-pink-700 transition-all duration-300">
        Spara
      </button>
      
    </div>
  </div>
</form>
  {/* nästa form */}

<br/>
  <div
                    className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span clas="text-green-500">
                        <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                    </span>
                    <span className="tracking-wide">Ta bort/Ändra behandling</span>
                 
                </div>
               
                <div className="text-gray-700">
                    <div className="grid md:grid-cols-6 text-sm">                
                            <div className="font-semibold">Id</div>
                            <div className="font-semibold">Namn</div>
                            <div className="font-semibold">Beskrivning</div>
                            <div className="font-semibold">Pris</div>
                            <div className="font-semibold">Bild</div>  
                            <div className="font-semibold">Action</div> 
                            {allTreatments.map((product) => {
                        return (<><p>{product.id}</p>
                        <p>{product.name}</p>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <p>Bild</p>
                        {/* kan man göra så här? */}
                        <div key={product.id}>                      <button onClick={()=>openModal(product.id)} className="inline-flex items-center justify-center w-6 h-6 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline">
  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
</button>
<button onClick={()=>deleteBooking(product.id)} className="inline-flex items-center justify-center w-6 h-6 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline">
  <svg className="w-5 h-5 fill-current" viewBox="0 0 50 25"><path d="M12 12h2v12h-2z" fill="currentColor"></path><path d="M18 12h2v12h-2z" fill="currentColor"></path><path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z" fill="currentColor"></path><path d="M12 2h8v2h-8z" fill="currentColor"></path>
</svg>
</button>
</div></>)
                    })}
                    <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >

          <button onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width=" 24 " height=" 24 " viewBox=" 0 0 24 24 ">
          <path fill="hotpink" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
 </svg> </button>
          
 <form onSubmit={()=>onHandleSubmitChange(localStorage.getItem("changeId"))}>
                
                
 <div
                    className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span clas="text-green-500">
                        <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                    </span>
                    <span className="tracking-wide">Ändra behandling</span>
                 
                </div>
               
                <div className="bg-white shadow rounded-lg p-6">        
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="border focus-within:border-pink-500 focus-within:text-pink-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">Behandlingens namn *</label>
          </p>
        </div>
        <p>
          <input id="name" name="name" value={changeTreatment.name}
                            onChange={onHandleChangeTreatment} autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border focus-within:border-pink-500 focus-within:text-pink-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="lastname" className="bg-white text-gray-600 px-1">Pris *</label>
          </p>
        </div>
        <p>
          <input id="price" name="price" value={changeTreatment.price}
                            onChange={onHandleChangeTreatment} autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border focus-within:border-pink-500 focus-within:text-pink-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="username" className="bg-white text-gray-600 px-1">Beskrivning *</label>
          </p>
        </div>
        <p>
          <input id="description" name="description" value={changeTreatment.description}
                            onChange={onHandleChangeTreatment} autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 outline-none block h-full w-full"/>
        </p>
      </div>
     {/*  <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label for="password" className="bg-white text-gray-600 px-1">Bild *</label>
          </p>
        </div>
        <p>
          <input id="password" autocomplete="false" tabindex="0" type="file" className="py-1 px-1 outline-none block h-full w-full"/>
        </p>
      </div> */}
    </div>
    <div className="border-t mt-6 pt-3">
      <button className="rounded text-gray-100 px-3 py-1 bg-pink-500 hover:shadow-inner hover:bg-pink-700 transition-all duration-300">
        Spara
      </button>
    </div>
  </div>
                         
               
               
            </form> </Modal>
                    </div>
                </div>
                

                
            </div> </div>: 
        <div className="w-full h-auto md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
                <div
                    className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span clas="text-green-500">
                        <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
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
                                <p className="text-blue-800" href="mailto:jane@example.com">{userEmail}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Födelsedag</div>
                            <div className="px-4 py-2">Feb 06, 1998</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-white p-3 shadow-sm rounded-sm">
                <div
                    className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span clas="text-green-500">
                        <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                    </span>
                    <span className="tracking-wide">Mina bokningar</span>
                </div>
                <div
                    className="flex items-center flex-wrap space-x-2 font-semibold text-gray-900 leading-8">

                    {bookings.map((product) => {
                        return (<BookingCard
                            key={product.id}
                            bookingId={product.id}
                            name={product.name}
                            date={product.date}
                            telephone={product.telephone}/>)
                    })}

                </div>
            </div> 
        </div> }
    </div> </div> 
</div > <Footer/> </>
    )
}

export default Booking;