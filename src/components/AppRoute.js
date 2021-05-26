import React from "react";
import Navbar from "./Navbar";
import Booking from "./Booking";
import Treatment from "./Treatment";
import Landingpage from "./Home";
import Login from "./Login";
import Register from "./Register";
import AddTreatment from "./AddTreatment";

import {Route, BrowserRouter as Router} from "react-router-dom";

export default function AppRoute() {

    return ( <> <Router>

        <Navbar/>

        <Route path="/" exact component={Landingpage}/>
        <Route path="/behandlingar" component={Treatment}/>
        <Route path="/bokningar" component={Booking}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/addtreatment" component={AddTreatment}/>

    </Router> </>
    )
}