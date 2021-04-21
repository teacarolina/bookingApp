import React from "react";

                //props
function Card({productName, price}) {
    return(
        <div>
            =====================
            <div>{productName}</div>
            <div>{price}</div>
            =====================
        </div>
    )
}

export default Card