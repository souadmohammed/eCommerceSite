import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {

    state={products:[
        {id:1,productName:"iphone",price:2440,quantity:0},
        {id:2,productName:"Sony",price:4900,quantity:0},
        {id:3,productName:"Samsung QLED TV",price:7700,quantity:0},
        {id:4,productName:"Xbox",price:8900,quantity:0},
        {id:5,productName:"Dell Monitor",price:8700,quantity:0},
        {id:6,productName:"MacBook",price:4500,quantity:0},
    ]}
    render() {
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
       
        )}

    // render ends here

    handleIncrement=(prodect,maxV)=>{
        // ارسلنا الاوبجيكت من التشايلد الي البيرنت 
        // سوينا اوبجيكت جديد وخزنا فيه الاستيت القديمه عشان نغير عليها وبعدين نساويها بالقديمه باستخدام السيت

        console.log("nnnnnn",prodect);
        let allProdect =[...this.state.products];
        //استخدم الانديكس اوف عشان اعرف بالزبط الاوبجيكت المحدد
        let index =allProdect.indexOf(prodect)
        
        if(allProdect[index].quantity<maxV){
            allProdect[index].quantity++
            //update the state of current component (parent component)
            this.setState({prodects:allProdect})
        }
       


        
    }

    handleDecrement=(prodect,minV)=>{
        console.log('dddd',prodect);
        let allProdect=[...this.state.products]
        let index=allProdect.indexOf(prodect)

        if(allProdect[index].quantity>minV){

        allProdect[index].quantity--
        //update the state of current component (parent component)
        this.setState({prodects:allProdect})}
    }


      // execute when the user click on Delete(X) button in the Product component
     handelDelete =(prodect)=>{
         //get index of selected prodect
         let allProdect=[...this.state.products];
        let index=allProdect.indexOf(prodect)

        if(window.confirm("Are you sure to delete?")){
        allProdect.splice(index,1)
        // start from the index and delete one element
        this.setState({prodects:allProdect}) }

     }


}