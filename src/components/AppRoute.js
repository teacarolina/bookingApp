import React from "react";
import Card from "./Card";
import Form from "./Form";

import {Route, BrowserRouter as Router} from "react-router-dom";
//React-router-DOM
export default function AppRoute() {
    
    return(
        <>
            <Router>
                {/* När användare kommer in på hemsidan använder vi card
                varför skriver vi exakt, när den matchar exakt med den här path så visas Card */}
                <Route path="/" exact component={Card} />
                <Route path="/form" component={Form} />
            </Router>
        </>
    )
}