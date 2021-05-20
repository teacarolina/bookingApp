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

      <div class="bg-white">

<main class="my-8">
        <div class="container mx-auto px-6">
            <div class="h-64 rounded-md overflow-hidden bg-cover bg-center"/*  style="background-image: url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')" */>
                <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                    <div class="px-10 max-w-xl">
                        <h2 class="text-2xl text-white font-semibold">Lashlift</h2>
                        <p class="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                        <button class="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Boka nu</span>
                            <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="md:flex mt-8 md:-mx-4">
                <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" /* style="background-image: url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')" */>
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div class="px-10 max-w-xl">
                            <h2 class="text-2xl text-white font-semibold">Browlift</h2>
                            <p class="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                            <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Boka nu </span>
                                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" /* style="background-image: url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')" */>
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div class="px-10 max-w-xl">
                            <h2 class="text-2xl text-white font-semibold">Naglar</h2>
                            <p class="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                            <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Boka nu</span>
                                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="mt-16">
            <h3 class="text-gray-600 text-2xl font-medium">Behandlingar</h3>
                <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
         
                {treatments.map((product)=>{
        return(
          <TreatmentCard key={product.id} image={product.img} name={product.name} price={product.price} description={product.description}/>
        )
      })}
          <br/>
          {/* allTreatments.length > loadPage || allTreatments.length === loadPage
                                                                        ??????? */}
    




                </div>
                </div> <br/><br/>
                { (allTreatments.length > loadPage || allTreatments.length === loadPage-2) ? 
      <button onClick={loadMore} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
        {loadButton}</button> : <button onClick={showLess} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          {loadButton}</button>}
         
                </main>
                </div>

    

     {/*    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-min">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
           
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <img className="h-13 w-am hidden lg:block" src="https://cdn.pixabay.com/photo/2017/08/07/14/40/portrait-2604539_1280.jpg" alt="Workflow"/>
            <img className="h-13 w-40 block lg:hidden" src="https://cdn.pixabay.com/photo/2017/08/07/14/40/portrait-2604539_1280.jpg" alt="Workflow"/>

              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Thumbnail label
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                    Beskrivning
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Boka
          </button>
          <div type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            2000sek
          </div>
        </div>
    </div> */}

      <Footer/>
    </>
    )
}

export default Treatment;