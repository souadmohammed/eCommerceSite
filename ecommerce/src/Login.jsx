import React, { Component } from "react";

export default class Login extends React.Component {

    // we have tow ways to initilaze state 
    // 1- state ={};
    // 2- initilaze state in constractor (we must call the parent class constractor as a first statment by using super keyword)

    constructor(props) {
        super(props);
        this.state = { email: "abs@dd", password: "323" ,color:"btn btn-primary"}
        
        
    }
    
    render() {
        
        return (
            
            <div className="col-lg-9 px-5">
                <h4 className="m-1 p-2 border-bottom">Login</h4>

                {/* Email starts */}
                <div className="form-group form-row p-2">
                    <label className="col-lg-4 p-2">Email:</label>
                    <input
                        type="text"
                        className="form-control "
                        value={this.state.email}
                        onChange={(event) => { this.setState({ email: event.target.value }) }} />
                </div>{/* Email ends */}


                {/* password starts */}
                <div className="form-group form-row p-2">
                    <label className="col-lg-4 p-2">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={(event) => { this.setState({ password: event.target.value }) }} />
                </div>{/* password ends */}

                <div className="text-end px-2">
                    {this.state.massage}
                    <button className={ this.state.color} onClick={this.onLoginClick}>Login</button>
                </div>
            </div>)

    }// end of render method 
    // Executes when the user clicks on Login
    onLoginClick = () => {
        console.log(this.state);

        if (this.state.email === "admin@eee" && this.state.password === "admin111") {
            //success
            this.setState({
                massage:
                    <span className="text-success px-3">"Successfully Logged-in"</span>
                   , color : "btn btn-success"
            }
            )
            
        } else {
            //erorr
            this.setState({
                massage:
                    <span className="text-danger px-3">"invalid Logged-in, please try again"</span>
                    ,color : "btn btn-danger"
                })
           
        }
    }

    changeColor = () => {

    }

    // == {check the value }
    // === {check the value and the type}

}