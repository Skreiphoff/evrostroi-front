import {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

export default class ProductCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <Link to={'/products?id='+this.props.item.id} className="card-link">
                    <img className="card-img" src={this.props.item.preview_img} width="200"
                         height="150" alt=""/>
                    <h3 className="card-title">{this.props.item.title}</h3>
                    <span className="card-price">{this.props.item.price} руб</span>
                    <Link to={'/products?id='+this.props.item.id} className="card-link"><Button aria-controls="simple-menu" aria-haspopup="true" >
                        В корзину
                    </Button></Link>
                </Link>
            </div>
        )
    }
}
