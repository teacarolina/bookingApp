import React, {useState} from "react";

const isAdmin=true;

function Form() {

    const initialValues = {
        productName:" ",
        price:" "
    }

        //rendera          //sätta          //default value
    const [formValues, setFormValues] = useState(initialValues) 

    function onHandleSubmit() {
        //fixa detta
    }

    function onHandleChange() {
        //fixa detta
    }

    return(
        <>
        {isAdmin ?
            <form onSubmit={onHandleSubmit}>
                <label for="productName">Product Name:</label>
                <input className="border" value={formValues.productName} name="productName" onChange={onHandleChange}/>
                <label for="productName">Product Price:</label>
                <input className="border" type="number" name="price" value={formValues.price} onChange={onHandleChange}/>

    {/* exempel hur man använder tailwind button className="bg-purple-600" */}
                <button>Lägg till</button>
            </form>

        : <div>Du har inte behörighet att se det här</div>}
        </>
    )
}

export default Form