import {Component} from "react";
import Order from "./Order"

export default class Cabinet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname:'',
            email: '',
            registration_data: "21-01-2021",
            orders: 18,
            address: "г. Белгород, ул Буденого, д 14г, кв 56",
            buttonToggle: false
        }
    }

    componentDidMount() {
        fetch('https://evrostroi.loc/api/v1/me', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('auth'),
                Accept: 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data.data)
                this.setState({
                    name: data.data.name,
                    surname: data.data.surname,
                    email: data.data.email,
                    registration_data: data.data.created_at
                })
            });
    }

    handleClick = () => {
        this.setState({buttonToggle: !this.state.buttonToggle})
    }

    render() {
        return (
            <section className="cabinet">
                <div className="container">
                    <h2 className="cabinet-title">Личный кабинет</h2>
                    <div className="cabinet-wrapper">
                        <div className="cabinet-info">
                            <p className="cabinet-info-title">{this.state.name} {this.state.surname}</p>
                            <p className="cabinet-status">{this.state.email}</p>
                            <div className="cabinet-intelligence-inner">
                                <div className="cabinet-data-left">
                                    <p className="cabinet-data-text">Дата регистрации</p>
                                    <p className="cabinet-data-text">Количество заказов</p>
                                    <p className="cabinet-data-text">Адрес доставки </p>
                                </div>
                                <div className="cabinet-data-right">
                                    <p className="cabinet-data-text">{(this.state.registration_data).toString()}</p>
                                    <p className="cabinet-data-right-text">{this.state.orders}</p>
                                    <p className="cabinet-data-adress-text">{this.state.address}</p>
                                </div>
                            </div>
                        </div>
                        <div className="cabinet-orders">
                            <Order/>
                            {/*<div className="pagination-block">*/}
                            {/*    <ul className="card-pagination">*/}
                            {/*        <li className="card-pagination-list">*/}
                            {/*            <a href="#" className="card-pagination-link">«</a>*/}
                            {/*        </li>*/}
                            {/*        <li className="card-pagination-list active">*/}
                            {/*            <a href="#" className="card-pagination-link">1</a>*/}
                            {/*        </li>*/}
                            {/*        <li className="card-pagination-list">*/}
                            {/*            <a href="#" className="card-pagination-link">2</a>*/}
                            {/*        </li>*/}
                            {/*        <li className="card-pagination-list">*/}
                            {/*            <a href="#" className="card-pagination-link">3</a>*/}
                            {/*        </li>*/}
                            {/*        <li className="card-pagination-list">*/}
                            {/*            <a href="#" className="card-pagination-link">4</a>*/}
                            {/*        </li>*/}
                            {/*        <li className="card-pagination-list">*/}
                            {/*            <a href="#" className="card-pagination-link">»</a>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
