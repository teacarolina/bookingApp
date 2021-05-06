import React from "react";
import BookingForm from "./BookingForm";
import Navbar from "./Navbar";
import Booking from "./Booking";
import Treatment from "./Treatment";
import Landingpage from "./Home";
import Login from "./Login";
import Register from "./Register";
import AddTreatment from "./AddTreatment";

//React-router-DOM
import {Route, BrowserRouter as Router} from "react-router-dom";

export default function AppRoute() {
    
    return(
        <>
            <Router>

                <Navbar/>

                {/* vi skriver exact component för när den matchar exakt med den här path så 
                visas Landingpage */}

                <Route path="/" exact component={Landingpage} />
                <Route path="/behandlingar" component={Treatment} />
                <Route path="/form" component={BookingForm} />
                <Route path="/bokningar" component={Booking} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/addtreatment" component={AddTreatment} />
                
            </Router>
        </>
    )
}