import React, {useEffect} from 'react';
import axios from "axios";

function API() {

    useEffect(() => {
        FetchData();
    })
    
    {/* async await */}
    async function FetchData() {
       const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
       console.log(response)
    }
    
    return (
        <div>
           
        </div>
    )
}

export default API;