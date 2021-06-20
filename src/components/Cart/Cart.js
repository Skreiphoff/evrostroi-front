import {Component} from "react";
import ProductCart from "./ProductCart";


export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carts: [],
            total: 0
        }
    }

    componentDidMount() {
        fetch('https://evrostroi.loc/api/v1/cart', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('auth'),
                Accept: 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                this.setState({carts: data.data})
                // data.data.forEach((cart) => {
                //     this.state.carts.push(cart)
                // });
            });
    }

    render() {
        return (
            <section className="cart">
                <div className="container">
                    <div className="cart-wrapper">
                        <div className="cart-product-items">
                            {this.state.carts.map((item, i) => {
                                return <ProductCart key={i} item={item}/>
                            })}
                        </div>
                        <div className="cart-info">
                            <h3 className="cart-info-title">Корзина</h3>
                            <div className="cart-info-inner">
                                <div className="cart-info-descr">
                                    <p className="cart-info-text">Всего товаров</p>
                                    <p className="cart-info-text">Общий вес</p>
                                    <p className="cart-info-text">Доставка</p>
                                </div>
                                <div className="cart-info-number">
                                    <p className="cart-info-number-text">3</p>
                                    <p className="cart-info-number-text">1,2 кг</p>
                                    <p className="cart-info-number-text">10 руб</p>
                                </div>
                            </div>
                            <div className="cart-total-price">
                                <span>Итог: 123 руб</span>
                            </div>
                            <div className="cart-button">
                                <a className="cart-link" href="#">Оформить</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
