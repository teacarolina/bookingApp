import React from "react";
import Card from "./Card";

//den här datan ska komma från databas eller APIes, men brukar komma i det här formatet
//en array av objects
const arrayofProductObject = [
    {productName:"Headphones1", price:"1800"},
    {productName:"Headphones2", price:"999"},
    {productName:"Headphones3", price:"1000"},
    {productName:"Headphones4", price:"3200"}
    ]

function CardList() {
//för att kunna skriva JS kod måste vi skriva det inom {}
    return(
        <div>
            Flera Card
                           {/* product = representerar varje item i listan */}
            {arrayofProductObject.map( (product) => { 
                return(<Card productName={product.productName} price={product.price}/>) } )}
                                            {/* returnerar ett Card för varje item i listan */}
        </div>
    )
}

export default CardList