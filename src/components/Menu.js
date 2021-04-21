import React from 'react';
import {Link} from "react-router-dom";

function Menu() {
    return (
        <>
            <nav>
                <Link to="/">CardList</Link>
                <Link to="/form">Lägg till</Link>
            </nav>  
        </>
    )
}

export default Menu