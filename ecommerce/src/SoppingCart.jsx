import React, { Component } from "react";
export default class ShoppingCart extends Component {

    state={products:[
        {id:1,productName:"iphone",price:2440,quantity:3},
        {id:2,productName:"Sony",price:4900,quantity:6},
        {id:3,productName:"Samsung QLED TV",price:7700,quantity:2},
        {id:4,productName:"Xbox",price:8900,quantity:5},
        {id:5,productName:"Dell Monitor",price:8700,quantity:0},
        {id:6,productName:"MacBook",price:4500,quantity:0},
    ]}
    render() {
        return <div>
        <span><h4>Shopping Cart </h4> </span>
            <button>6</button>
            

            </div>
       
    }
}