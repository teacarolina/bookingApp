import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
    return (

        <div className="w-full bg-pink-100 text-gray-900">
            <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
                <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">

                    <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
                        <img
                            className="mx-auto h-16 w-auto"
                            src="https://cdn.pixabay.com/photo/2020/11/09/12/56/eyes-5726595_1280.png"
                            alt="eyes"/>

                        <p className="opacity-60">Good lashes 🖤 Good mood</p>
                        <p className="opacity-60">© 2021 Stylist Studion</p>
                    </div>
                    <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                        
                        
                        <p className="opacity-60">Naglar</p>
                        <p className="opacity-60">Browlift</p>
                        <p className="opacity-60">Lashlift & Fransförlängning</p>
                    </div>
                    <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                    <Link to="/contact" className="opacity-90">Kontaktformulär</Link>
                        
                        
                    </div>
                    <div className="w-full sm:w-1/5 pt-6 flex items-end mb-1">
                        <div className="flex flex-row space-x-4">
                        <i><svg class="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></i>
                        <i><svg class="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg></i>   
                        <i><svg class="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16.882 7.842a4.882 4.882 0 0 0 -9.764 0c0 4.273-.213 6.409-4.118 8.118 2 .882 2 .882 3 3 3 0 4 2 6 2s3-2 6-2c1-2.118 1-2.118 3-3-3.906-1.709-4.118-3.845-4.118-8.118h0zM3 15.961c4-2.118 4-4.118 1-7.118m17 7.118c-4-2.118-4-4.118-1-7.118" /></svg></i>  
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

export default Footer;