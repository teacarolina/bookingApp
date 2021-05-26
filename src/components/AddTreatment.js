import React, {useState} from 'react';
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import {useHistory} from "react-router-dom";

//ta bort console log och onödiga kommentarer??????!!

function AddTreatment() {

    const initialValues = {
        name: "",
        description: "",
        price: 0
    }
    //price:0 - change this so I can see price??

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

    return ( <> <Header/> < div className = "flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" > <div className="max-w-md w-full space-y-8">
        <div>
            <img
                className="mx-auto h-16 w-auto"
                src="https://cdn.pixabay.com/photo/2020/11/09/12/56/eyes-5726595_1280.png"
                alt="eyes"/>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Lägg till behandling
            </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onHandleSubmit} method="POST">
            <input type="hidden" name="remember" value="true"/>
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={treatment.name}
                        onChange={onHandleChange}
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Behandlingens namn"/>
                </div>
                <div>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        value={treatment.description}
                        onChange={onHandleChange}
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Beskrivning"/>
                </div>
                <div>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        value={treatment.price}
                        onChange={onHandleChange}
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Pris"/>
                </div>
                <div>
                    <input
                        id="file"
                        name="file"
                        type="file"
                        onChange={onHandleChangeImg}
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Bild"/>
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Skapa behandling
                </button>
            </div>
        </form>
    </div> </div>

        <Footer/> </>)
}

export default AddTreatment;