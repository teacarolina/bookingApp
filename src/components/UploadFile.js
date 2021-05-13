import React, {useState} from 'react'
import axios from "axios"
import Header from "./Header"
import Footer from "./Footer"

//ta bort?? 

function UploadFile() {

    const [fileData , setFileData] = useState();

    function onHandleChange(e) {
        setFileData(e.target.files[0])
    }

    async function FileUpload (e) {
        e.preventDefault();

        console.log(fileData)

        const data = new FormData()
        data.append("files", fileData)

        const res = axios.post("http://localhost:1337/upload", data)
        
        console.log(res)
       
    }

    return (
        <>
        <Header/>
        
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-16 w-auto" src="https://cdn.pixabay.com/photo/2020/11/09/12/56/eyes-5726595_1280.png" alt="Workflow"/>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Ladda upp en fil
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={FileUpload} method="POST">
              <input type="hidden" name="remember" value="true"/>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <input id="file" name="file" type="file" onChange={onHandleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Ditt namn"/>
                </div>
              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Bekräfta
                </button>
              </div>
              </div>
            </form>
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default UploadFile