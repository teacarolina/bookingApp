import React from "react";

function BookingForm() {
    return(
        <>
        <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div class="max-w-md w-full space-y-8">
            <div>
              <img class="mx-auto h-16 w-auto" src="https://cdn.pixabay.com/photo/2020/11/09/12/56/eyes-5726595_1280.png" alt="Workflow"/>
              <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Gör din bokning
              </h2>
         
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true"/>
              <div class="rounded-md shadow-sm -space-y-px">
                <div>
                  
                  <input id="name" name="name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Ditt namn"/>
                </div>
                <div>
                <input id="date" name="date" type="date" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Telefonnummer"/>
                </div>
                <div>
                  
                  <input id="telephone" name="telephone" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Telefonnummer"/>
                </div>
              </div>
        
              <div>
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Bekräfta
                </button>
              </div>
            </form>
          </div>
        </div>
        
        </>
    )
}

export default BookingForm;