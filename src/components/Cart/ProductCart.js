import {Component} from "react";


export default class ProductCart extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return(
            <div className="cart-product-item">
                <div className="cart-product-button">
                    <span className="delete-btn"/>
                </div>
                <div>
                    <img src={this.props.item.image} className={"image"} alt=""/>
                </div>
                <div className="description">
                    <span>{this.props.item.title}</span>
                </div>
                <div className="quantity-price-inner">
                    <div className="quantity">
                        <input type="number" name="name" value={this.props.item.value} onChange={this.handleChangeValue}/>
                    </div>
                    <div className="total-price">
                        <span>{this.props.item.price * this.props.item.value} руб</span>
                    </div>
                </div>
            </div>
        )
    }

    handleChangeValue = (event) => {
        this.props.item.value = event.target.value
        console.log(this.props.item.value)
    }
}
