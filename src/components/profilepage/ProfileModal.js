import React, {useState} from 'react';
import axios from "axios";
import Modal from 'react-modal';

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

function ProfileModal() {

    const [modalIsOpen,
        setIsOpen] = React.useState(false);
        const USERID = localStorage.getItem("userId");
        const initialValues = {
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            phonenumber: "",
            birthday: "",
            password: ""
        }

        const [changeValues,
            setChangeValues] = useState(initialValues);
           
            const [token,
                setToken] = useState(localStorage.getItem("jwt"));
                
                const [userId,
                    setUserId] = useState(USERID);
                    
            const [firstname, setFirstname] = useState("");
            const [lastname, setLastname] = useState("");
            const [username, setUsername] = useState("");
            const [email, setEmail] = useState("");
            const [phonenumber, setPhonenumber] = useState("");
            const [birthday, setBirthday] = useState("");

function openModal() {
        setIsOpen(true);
        axios.get(`http://localhost:1337/users/${userId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            }).then( (res)=> {
                setFirstname(res.data.firstname)
                    setLastname(res.data.lastname)
                    setUsername(res.data.username)
                    setEmail(res.data.email)
                    setPhonenumber(res.data.phonenumber)
                    setBirthday(res.data.birthday)
            })
}

function closeModal() {
    setIsOpen(false);
}

function onHandleChange(e) {
    setChangeValues({
        ...changeValues,
        [e.target.name]: e.target.value
    })
}

function onHandleSubmit(e) {
    e.preventDefault();
    axios
        .put(`http://localhost:1337/users/${userId}`, {
        firstname: changeValues.firstname,
        lastname: changeValues.lastname, 
        username: changeValues.username,
        email: changeValues.email,
        phonenumber: changeValues.phonenumber,
        birthday: changeValues.birthday,
        password: changeValues.password
    }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then(() => {
                window.location.reload();
            })

}

return ( <>
<button
                onClick={openModal}
                className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                Ändra
            </button>
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
          
          <img className="mx-auto h-16 w-auto" src="https://cdn.pixabay.com/photo/2020/11/09/12/56/eyes-5726595_1280.png" alt=" eyes "/>
 < h2 className = "mt-6 text-center text-3xl font-extrabold text-gray-900" > Ändra profil </h2><br/> <form  >
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <p>
            <label htmlFor="firstname" className="bg-white text-gray-600 px-1">Förnamn *</label>
          </p>
                        <input
                            id="firstname"
                            name="firstname"
                            type="text"
                            value= {changeValues.firstname}
                            onChange={onHandleChange} 
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder={firstname}/>
                    </div>
                    <div>
                    <p>
            <label htmlFor="lastname" className="bg-white text-gray-600 px-1">Efternamn *</label>
          </p>
                        <input
                            id="lastname"
                            name="lastname"
                            type="text"
                            value= {changeValues.lastname}
                            onChange={onHandleChange} 
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder={lastname}/>
                    </div>
                    <div>
                    <p>
            <label htmlFor="username" className="bg-white text-gray-600 px-1">Användarnamn *</label>
          </p>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            value= {changeValues.username}
                            onChange={onHandleChange} 
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder={username}/>
                    </div>
                    <div>
                    <p>
            <label htmlFor="email" className="bg-white text-gray-600 px-1">Emailadress *</label>
          </p>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            value= {changeValues.email}
                            onChange={onHandleChange} 
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder={email}/>
                    </div>
                    <div>
                    <p>
            <label htmlFor="phonenumber" className="bg-white text-gray-600 px-1">Telefonnummer *</label>
          </p>
                        <input
                            id="phonenumber"
                            name="phonenumber"
                            type="text"
                            value= {changeValues.phonenumber}
                            onChange={onHandleChange} 
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder={phonenumber}/>
                    </div>
                    <div>
                    <p>
            <label htmlFor="birthday" className="bg-white text-gray-600 px-1">Födelsedag *</label>
          </p>
                        <input
                            id="birthday"
                            name="birthday"
                            type="date"
                            value= {changeValues.birthday}
                            onChange={onHandleChange} 
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Födelsedag"/>
                    </div>
                    <div><p>
            <label htmlFor="password" className="bg-white text-gray-600 px-1">Lösenord *</label>
          </p>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value= {changeValues.password}
                            onChange={onHandleChange} 
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Lösenord"/>
                    </div>
                </div>
                <div><br/>
                    <button onClick={onHandleSubmit}
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Bekräfta
                    </button>
                </div>
            </form> </Modal>

            </>)


}

export default ProfileModal;