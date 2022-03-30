import React, { Component } from "react";
import NavBar from "./NavBar";
import MainContent from "./CustomerList"
import CustomerList from "./CustomerList";
import ShoppingCart from "./SoppingCart";
import Login from "./Login";



//creat component that warp navbar and maincontent
export default class App extends Component {
    // each component must be have render method which will rendred in the wedpag 


    render() {
        return <React.Fragment>
            <NavBar />
            <Login/>
            {/* <CustomerList/>  */}
            <ShoppingCart />
        </React.Fragment>
    }
}