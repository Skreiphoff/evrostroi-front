import {Component} from "react";

export default class order extends Component
{
    constructor() {
        super();
        this.state = {
            buttonToggle: false
        }
    }

    handleClick = () => {
        this.setState({buttonToggle: !this.state.buttonToggle})
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="card-wrapper">
                <div className="card-orders">
                    <h3 className="card-title">Заказ № ID 1235465</h3>
                    <p className="card-date">Дата заказа: 21-05-2021</p>
                    <div className="cabinet-card-wrapper">
                        <button type="button" className="btn-trigger" onClick={this.handleClick}>Название товара</button>
                        <div className="cabinet-card-content" style={{display: (this.state.buttonToggle ? 'block' : 'none')}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae
                            reiciendis quia, quidem aspernatur ut suscipit enim quo tempore dolores
                            perspiciatis necessitatibus obcaecati tempora saepe natus quas omnis esse
                            voluptas? Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                        </div>
                    </div>
                </div>
                <div className="card-block">
                    <span className="card-span">Выполнен</span>
                    <p className="card-price">5500 руб</p>
                </div>
            </div>
        )
    }
}
