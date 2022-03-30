import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {


    // Execute when the component is mounted
    constructor(props){
    console.log('constructor - ShoppingCart');
        // call the parent class constructor by using super and also supply the props for the same
        super(props); // calling super class's constructor

        //intialation of the state
        this.state={products:[
            {id:1,productName:"iphone",price:2440,quantity:0},
            {id:2,productName:"Sony",price:4900,quantity:0},
            {id:3,productName:"Samsung QLED TV",price:7700,quantity:0},
            {id:4,productName:"Xbox",price:8900,quantity:0},
            {id:5,productName:"Dell Monitor",price:8700,quantity:0},
            {id:6,productName:"MacBook",price:4500,quantity:0}
         ]}


        //** */ code should not be written in the constructor:
        // 1- http requests ==> can be made in the component 
        //didmount method ; because that execute after completion 
        //of the component lifecycle of all the child components that
        // are rendered inside the render method 

        // 2- fetch data from databaes
    }

    
    render() {
        console.log('render - ShoppingCart');
        return (
        <div className="container-fluid m-3">
        <span><h4>Shopping Cart </h4> </span>
            
            <div className="row">
                {this.state.products.map((prod)=>{
                 return (
                 <Product 
                 key={prod.id} 
                 product={prod} 
                 onIncrement={this.handleIncrement}
                 onDecrement={this.handleDecrement}
                 onDelete={this.handelDelete}
                 >
                 <button className="btn btn-dark">Buy Now</button>
                 </Product>)
                })}
            </div>

            </div>
       
        )} // render ends here

    // execute after constructor and render method (includes life cycle of child component ,if any) of current component 
    componentDidMount(){
        // fetch the data from data source  
        console.log('componentDidMount - ShoppingCart');
    }



    handleIncrement=(products,maxV)=>{
        // ارسلنا الاوبجيكت من التشايلد الي البيرنت 
        // سوينا اوبجيكت جديد وخزنا فيه الاستيت القديمه عشان نغير عليها وبعدين نساويها بالقديمه باستخدام السيت

        console.log("nnnnnn",products);
        let allproducts =[...this.state.products];
        //استخدم الانديكس اوف عشان اعرف بالزبط الاوبجيكت المحدد
        let index =allproducts.indexOf(products)
        
        if(allproducts[index].quantity<maxV){
            allproducts[index].quantity++
            //update the state of current component (parent component)
            this.setState({products:allproducts})
        }
       


        
    }

    handleDecrement=(products,minV)=>{
        console.log('dddd',products);
        let allproducts=[...this.state.products]
        let index=allproducts.indexOf(products)

        if(allproducts[index].quantity>minV){

        allproducts[index].quantity--
        //update the state of current component (parent component)
        this.setState({products:allproducts})}
    }


      // execute when the user click on Delete(X) button in the Product component
     handelDelete =(products)=>{
         //get index of selected products
         let allproducts=[...this.state.products];
        let index=allproducts.indexOf(products)

        if(window.confirm("Are you sure to delete?")){
        allproducts.splice(index,1)
        // start from the index and delete one element
        this.setState({products:allproducts}) }
        console.log('');

     }

     componentDidUpdate(prevProps,prevState){
         console.log(
        'componentDidUpdate - ShoppingCart',"  prevProps  ",
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
        console.log('componentWillUnmount - ShoppingCart')
     }

     componentDidCatch(error,info){
         console.log('componentDidCatch - ShoppingCart');
         console.log(error,info);

         localStorage.lastError=`${error}\n ${JSON.stringify(info)}`;
     }

}