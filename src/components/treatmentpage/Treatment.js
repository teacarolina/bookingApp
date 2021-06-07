import React, {useState, useEffect} from 'react';
import axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import TreatmentCard from "./TreatmentCard";

function Treatment() {

    const [treatments,
        setTreatments] = useState([]);
    const [loadPage,
        setLoadPage] = useState(2)
    const [loadButton,
        setLoadButton] = useState("Ladda fler")
    const [allTreatments,
        setAllTreatments] = useState([])

    useEffect(() => {
        const fetchTreatments = async() => {
            const response = await axios.get(`http://localhost:1337/products?_limit=${loadPage}`)
            setTreatments(response.data)
        }
        
        fetchTreatments()
    }, [loadPage])

    //to fetch all treatments in the db to set length of array to correct number
    useEffect(() => {
        const fetchAllTreatments = async() => {
            const responseAll = await axios.get(`http://localhost:1337/products`)
            setAllTreatments(responseAll.data)
        }

        fetchAllTreatments()
    }, [])

    const loadMore = () => {
        setLoadPage((loadPage) => loadPage +2)
    }

    function showLess() {
        setLoadPage(2)
        setLoadButton("Ladda fler")
    }

    return ( <> <Header/> <div className="bg-gray-100"> <div className="w-full text-black bg-main-color">
        <div
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="p-4 flex flex-row items-center justify-between">
                <h1
                    className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">
                    Behandlingar & Boka
                </h1>
            </div>
            <nav
                className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row"></nav>
        </div>
    </div> </div>


      <div className="bg-white">

<main className="my-8">
        
        <div className="container mx-auto px-6">
            <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(https://cdn.pixabay.com/photo/2018/02/18/11/05/the-hand-3161974_1280.jpg)`}}>
                <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                    <div className="px-10 max-w-xl">
                        <h2 className="text-2xl text-white font-semibold">Naglar</h2>
                        <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                        <button className="flex items-center mt-4 px-3 py-2 bg-pink-400 text-white text-sm uppercase font-medium rounded hover:bg-pink-600 focus:outline-none focus:bg-pink-500">
                            <span>Läs mer</span>
                            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:flex mt-8 md:-mx-4">
                <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style={{backgroundImage: `url(https://cdn.pixabay.com/photo/2020/09/14/16/53/eye-5571467_1280.jpg)`}}> < div className = "bg-gray-900 bg-opacity-50 flex items-center h-full" > <div className="px-10 max-w-xl">
        <h2 className="text-2xl text-white font-semibold">Browlift</h2>
        <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum
            pariatur.</p>
        <button
            className="flex items-center mt-4 px-3 py-2 bg-pink-400 text-white text-sm uppercase font-medium rounded hover:bg-pink-600 focus:outline-none focus:bg-pink-500">
            <span>Läs mer
            </span>
            <svg
                className="h-5 w-5 mx-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </button>
    </div> </div>
                </div > <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2016/09/18/09/01/woman-1677558_1280.jpg)`
    }} 
> < div className = "bg-gray-900 bg-opacity-50 flex items-center h-full" > <div className="px-10 max-w-xl">
        <h2 className="text-2xl text-white font-semibold">Lashlift & Fransförlängning</h2>
        <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tempore facere provident molestias.</p>
        <button
            className="flex items-center mt-4 px-3 py-2 bg-pink-400 text-white text-sm uppercase font-medium rounded hover:bg-pink-600 focus:outline-none focus:bg-pink-500">
            <span>Läs mer</span>
            <svg
                className="h-5 w-5 mx-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </button>
    </div> </div>
                </div > </div> </div>
            <div className="mt-16">
            <h3 className="text-gray-600 text-2xl font-medium">Boka behandling</h3 > <div
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">

        {treatments.map((product) => {
            return (<TreatmentCard
                key={product.id}
                productId={product.id}
                image={product.img}
                name={product.name}
                price={product.price}
                description={product.description}/>)
        })}
        <br/>

    </div> </div> <br/> <br/>
        {
        ( allTreatments.length > loadPage ||  allTreatments.length === loadPage)
            ? <button
                    onClick={loadMore}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    {loadButton}</button>
            : <button
                    onClick={showLess}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Visa färre</button>
    } </main>
                </div > <Footer/> </>
    )
}

export default Treatment;