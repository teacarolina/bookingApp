import axios from 'axios'
import React from 'react'
import Header from "./Header"
import Footer from "./Footer"

//ej klar vi återkommer hit, testa själv hemma
function ForgotPassword() {

    function resetRequest() {
        axios.post('http://localhost:1337/auth/forgot-password', {
            email: 'test@test.se'
        }).then(response => {
            console.log("Your user received an email")
        }).catch(error => {
            console.log("An error occurred", error.response)
        });
    }

    return (
        <>
            <Header/>
    
<div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-16 w-auto" src="https://cdn.pixabay.com/photo/2020/11/09/12/56/eyes-5726595_1280.png" alt="Workflow"/>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Återställ ditt lösenord
      </h2>
    </div>
    <form className="mt-8 space-y-6" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nytt lösenord"/>
        </div>
        <div>
          <input id="samePassword" name="samePassword" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Bekräfta lösenord"/>
        </div>
      </div>
      <div>
        <button type="submit" onClick={resetRequest} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Återställ lösenord
        </button>
      </div>
    </form>
  </div>
</div>

<Footer/>
</>
    )
}

export default ForgotPassword