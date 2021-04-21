import React, {useState} from "react";

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
            <form onSubmit={onHandleSubmit}>
                <input value={formValues.productName} name="productName" onChange={onHandleChange}/>
                <input type="number" name="price" value={formValues.price} onChange={onHandleChange}/>

                <button>Lägg till</button>
            </form>
        </>
    )
}

export default Form