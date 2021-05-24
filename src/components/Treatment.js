import React, {useState, useEffect} from 'react';
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import TreatmentCard from "./TreatmentCard";

function Treatment() {

    const [treatments, setTreatments] = useState([]);
    const [loadPage, setLoadPage] = useState(2)
    const [loadButton, setLoadButton] = useState("Load More")
    const [allTreatments, setAllTreatments] = useState([])
    
    useEffect(()=> {
        const fetchTreatments = async()=> {
        const response = await axios.get(`http://localhost:1337/products?_limit=${loadPage}`)
        console.log(response)
        //console.log(response.data[0].img.formats.small.url)
        setTreatments(response.data)
        //console.log(response.data)
      }

      fetchTreatments()
    }, [loadPage])

    useEffect(()=> {
      const fetchAllTreatments = async()=> {
      const responseAll = await axios.get(`http://localhost:1337/products`)
      console.log(responseAll)
      //console.log(responseAll.data[0].img.formats.small.url)
      setAllTreatments(responseAll.data)
      //console.log("testing", responseAll.data)
    }

    fetchAllTreatments()
  }, [])

    function loadMore() {
      let dynamicPage = loadPage+2
      setLoadPage(dynamicPage)
      //???????
      console.log("treatments", treatments.length)
      console.log("loadpage", loadPage)
      if(treatments.length === allTreatments.length-2) {
        setLoadButton("Show Less")
      }
    }

    function showLess() {
      setLoadPage(2)
      //?????
      setLoadButton("Load More")
    }

    return (
      <>
      
      <Header/>

      <div className="bg-white">

<main className="my-8">
        <div className="container mx-auto px-6">
            <div className="h-64 rounded-md overflow-hidden bg-cover bg-center"/*  style="background-image: url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')" */>
                <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                    <div className="px-10 max-w-xl">
                        <h2 className="text-2xl text-white font-semibold">Lashlift</h2>
                        <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                        <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Boka nu</span>
                            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:flex mt-8 md:-mx-4">
                <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" /* style="background-image: url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')" */>
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Browlift</h2>
                            <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                            <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Boka nu </span>
                                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" /* style="background-image: url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')" */>
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Naglar</h2>
                            <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                            <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Boka nu</span>
                                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="mt-16">
            <h3 className="text-gray-600 text-2xl font-medium">Behandlingar</h3>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
         
                {treatments.map((product)=>{
        return(
          <TreatmentCard key={product.id} image={product.img} name={product.name} price={product.price} description={product.description}/>
        )
      })}
          <br/>
        
                </div>
                </div> <br/><br/>
                { (allTreatments.length > loadPage || allTreatments.length === loadPage-2) ? 
      <button onClick={loadMore} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
        {loadButton}</button> : <button onClick={showLess} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          {loadButton}</button>}
         
                </main>
                </div>

      <Footer/>
    </>
    )
}

export default Treatment;