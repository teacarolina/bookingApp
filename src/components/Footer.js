import React from 'react'

//vägbeskrivning 
function Footer() {
    return (
        
    <div className="w-full bg-pink-100 text-gray-900">
    <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
      <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
        
        <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
        <img className="mx-auto h-16 w-auto" src="https://cdn.pixabay.com/photo/2020/11/09/12/56/eyes-5726595_1280.png" alt="eyes"/>
  
            
          <p className="opacity-60">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p className="opacity-60">© 2021 Stylist Studion</p>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col space-y-4">
        <p className="opacity-60">Lorem ipsum</p>
          <p className="opacity-60">Lorem ipsum</p>
          <p className="opacity-60">Lorem ipsum</p>
          <p className="opacity-60">Lorem ipsum</p>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col space-y-4">
          <p className="opacity-60">Lorem ipsum</p>
          <p className="opacity-60">Lorem ipsum</p>
          <p className="opacity-60">Lorem ipsum</p>
          <p className="opacity-60">Lorem ipsum</p>
        </div>
        <div className="w-full sm:w-1/5 pt-6 flex items-end mb-1">
          <div className="flex flex-row space-x-4">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-google"></i>
          </div>
        </div>
      </div>
      <div className="opacity-60 pt-10">
        <p>Terms & Conditions | Privacy | Legal Notice</p>
      </div>
    </div>
  </div>
    )
}

export default Footer