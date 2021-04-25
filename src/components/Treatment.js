import React from 'react'

function Treatment() {
    return (
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-min">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
           
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <img class="h-13 w-am" src="https://cdn.pixabay.com/photo/2017/08/07/14/40/portrait-2604539_1280.jpg" alt="Workflow"/>

              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Thumbnail label
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                    Beskrivning
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Boka
          </button>
          <div type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            2000sek
          </div>
        </div>
    </div>
    )
}

export default Treatment;