import React from "react";
import CardList from "./CardList";
import Form from "./Form";
import Menu from "./Menu";
import Test from "./Test";

//React-router-DOM
import {Route, BrowserRouter as Router} from "react-router-dom";

export default function AppRoute() {
    
    return(
        <>
            <Router>

                <Menu/>

                {/* När användare kommer in på hemsidan använder vi card
                varför skriver vi exakt, när den matchar exakt med den här path så visas Card */}
                <Route path="/" exact component={CardList} />
                <Route path="/form" component={Form} />
                <Route path="/test" component={Test} />
            </Router>
        </>
    )
}