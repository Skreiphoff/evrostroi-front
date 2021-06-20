import {Component} from "react";
import ProductCard from "./Product/ProductCard";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }

    }

    componentDidMount() {
        fetch('https://evrostroi.loc/api/v1/products', {
            headers: {
                Accept: 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                this.setState({items: data.data})
                console.log(this.state.items)
            });
    }

    render() {
        return (
            <div>
                <section className="products">
                    <div className="container">
                        <h2 className="products-title">Наша продукция</h2>
                        <div className="products-card-wrapper">
                            {this.state.items.map((item, index) =>{
                                console.log(item)
                                return(<ProductCard key={index} item={item}/>)
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
