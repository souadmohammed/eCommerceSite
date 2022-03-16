import { Component } from "react";

export default class CustomerList extends Component {
    state = {
        pageTitle: "Customer",
        customerCount: 5,
        customers: [
            { id: 1, name: "scorr", phone: "123-142", address: { city: "london" }, photo: "https://picsum.photos/id/1010/60" },
            { id: 2, name: "wedd", phone: "123-148", address: { city: "wqon" }, photo: "https://picsum.photos/id/1012/60" },
            { id: 3, name: "wqwsc", phone: null, address: { city: "lonmdon" }, photo: "https://picsum.photos/id/1013/60" },
            { id: 4, name: "ewcs", phone: "122-142", address: { city: "lsadon" }, photo: "https://picsum.photos/id/1015/60" },
        ]
    }

    render() {
        return <div>{this.state.pageTitle}
            <span className=" badge-secondary m-5">count :{this.state.customerCount}</span>
            <button className="btn btn-info" onClick={this.onRefreshClick}>refersh</button>

            <table className="table table-success">
                <thead className="table table-secondary">
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Customer Name </th>
                        <th>Phone</th>
                        <th>city</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getCustomerRow()}
                </tbody>
            </table>
        </div>


    }
    // executes when the user click on Refresh button
    onRefreshClick = () => {
        this.setState({ customerCount: 7 })
        console.log('refrsh method');
    }

    getPhoneToRender = (phone) => {
        if (phone) return phone;
        else {
            return <div className="bg-warning  text-center">No phone number</div>
        }
    }

    getCustomerRow = () => {
        return this.state.customers.map((cust,index) => {
            return (
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td><img src={cust.photo} alt="Customer" />
                         <button className="btn btn-sm btn-secondary" onClick={()=>{this.changePicture(cust,index)}} >Change Picture</button></td>
                    <td>{cust.name}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.address.city ? (cust.address.city) : (<div className="bg-warning  text-center">"No address"</div>)}</td>
                </tr>)
        })
    }

    changePicture = (cust,index) => {
        console.log(cust,index);
       var cusArr = this.state.customers
       cusArr[index].photo="https://picsum.photos/id/210/60"
       this.setState({customers:cusArr})
    }
}