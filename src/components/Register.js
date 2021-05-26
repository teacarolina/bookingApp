import React, {useState} from 'react';
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Register() {

    const initialValues = {
        username: "",
        email: "",
        password: ""
    }

    const [registerValues,
        setRegisterValues] = useState(initialValues);
    // const [username, setUsername] = useState(initialValues); const
    // [registerComplete, setRegisterComplete] = useState(false);
    const [error,
        setError] = useState("");
    const history = useHistory();

    function onHandleSubmit(e) {
        e.preventDefault();
        axios
            .post('http://localhost:1337/auth/local/register', {
            username: registerValues.username,
            email: registerValues.email,
            password: registerValues.password
        })
            .then((e) => {
                if (e.data.user) 
                    history.push("/login")
                    //setRegisterComplete(true)
                })
            .catch((err) => {
                setError(err.response.data.message[0].messages[0].message)
            })

    }

    function onHandleChange(e) {
        setRegisterValues({
            ...registerValues,
            [e.target.name]: e.target.value
        })
        //setUsername({...username, [e.target.name]:e.target.value})
    }

    return ( <> <Header/>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> <div className="max-w-md w-full space-y-8">
        <div>
            <img
                className="mx-auto h-16 w-auto"
                src="https://cdn.pixabay.com/photo/2020/11/09/12/56/eyes-5726595_1280.png"
                alt="eyes"/>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Registera dig
            </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onHandleSubmit} method="POST">
            <input type="hidden" name="remember" value="true"/>
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <p className="text-gray-900 text-base font-medium">
                        {error}
                    </p>
                </div>
                <div>
                    <input
                        id="username"
                        name="username"
                        value={registerValues.username}
                        onChange={onHandleChange}
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Användarnamn"/>
                </div>
                <div>
                    <input
                        id="email"
                        name="email"
                        value={registerValues.email}
                        onChange={onHandleChange}
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Emailadress"/>
                </div>
                <div>
                    <input
                        id="password"
                        name="password"
                        value={registerValues.password}
                        onChange={onHandleChange}
                        type="password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Lösenord"/>
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Registrera
                </button>
                <Link
                    to="/login"
                    className="text-gray-900 hover:bg-pink-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Har du redan ett konto? Logga in här 😍</Link>
            </div>
        </form>
    </div> </div>

<Footer/> </>)
}

export default Register;