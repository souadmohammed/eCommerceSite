import React, { Component } from "react";

export default class Product extends Component {

    constructor(props){
        super(props)
        this.state = {
            product: this.props.product
        }
        console.log('constructor - Product');
    }
   
    render() {
        console.log('render - Product');
        return (
            <div className="col-lg-5">
                <div className="card m-2">

                    <div className="card-body">
                        <div className="text-muted">
                            #{this.state.product.id}
                            <span className="pull-right hand-icon" onClick={()=>{this.props.onDelete(this.state.product)}}>
                                <i className="fa fa-times"></i>
                            </span>
                        </div>

                        <h5 className="p-2 border-top">{this.state.product.productName}</h5>
                        <div># {this.state.product.price}</div>
                    </div>
                    {/* card body ends here */}
                    
                    <div className="card-footer ">
                        <div className= "float-left ">
                            <span className="badge text-dark">{this.state.product.quantity}</span>

                            <div className="btn-group">
                                <button className ="btn btn-outline-success" onClick={()=>{this.props.onIncrement(this.state.product,10)}}>+</button>
                                <button className ="btn btn-outline-danger" onClick={()=>{this.props.onDecrement(this.state.product,0)}}>-</button>
                            </div>
                        </div> 
                        {/* float-left ends here */}

                        <div className="float-right text-end">{this.props.children}</div>
                    </div>
                    {/* card-footer ends here */}

                </div>
            </div>)
    }

     componentDidMount(){
        // fetch the data from data source  
        console.log('componentDidMount - Product');
    }

    componentDidUpdate(prevProps,prevState){
        console.log(
       'componentDidUpdate - Product',"  prevProps  ",
        prevProps,"  prevState  ",
        prevState,"  this.props  ",
        this.props,"  this.state  ",
        this.state
        );

       //  if(prevProps.x!=this.props.x){
       //      // make http call
       //  }
    }

       //ِExecutes when the current instancec of current component is being deleted from memory
     // اذا كان عندنا راوتر تاني لما تتحول عليه تعمل هذي الميثود او في رابط لصفحه تانيه 
     componentWillUnmount(){
        console.log('componentWillUnmount - Product')
     }
}