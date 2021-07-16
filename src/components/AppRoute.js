import React from "react";
import Navbar from "./navbar/Navbar";
import Booking from "./profilepage/Booking";
import Treatment from "./treatmentpage/Treatment";
import Landingpage from "./landingpage/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import ContactForm from "./contact/ContactForm";

import {Route, BrowserRouter as Router} from "react-router-dom";

export default function AppRoute() {

    return ( <> <Router>

        <Navbar/>

        <Route path="/" exact component={Landingpage}/>
        <Route path="/behandlingar" component={Treatment}/>
        <Route path="/bokningar" component={Booking}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/contact" component={ContactForm}/>

    </Router> </>
    )
}