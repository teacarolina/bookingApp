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
      console.log("testing", responseAll.data)
    }

    fetchAllTreatments()
  }, [])

    function loadMore() {
      let dynamicPage = loadPage+2
      setLoadPage(dynamicPage)
      //???????
      if(treatments.length === allTreatments.length) {
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

      {treatments.map((product)=>{
        return(
          <TreatmentCard key={product.id} image={product.img} name={product.name} price={product.price} description={product.description}/>
        )
      })}
          <br/>
          {/* allTreatments.length > loadPage || allTreatments.length === loadPage */}
      { (treatments.length > loadPage || treatments.length === loadPage) ? 
      <button onClick={loadMore} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
        {loadButton}</button> : <button onClick={showLess} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          {loadButton}</button>}
          <br/><br/>

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