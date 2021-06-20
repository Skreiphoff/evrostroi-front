import {Component} from "react";

export default class Stats extends Component{
    render() {
        return(
            <section className="statistics">
                <div className="container">
                    <h2 className="statistics-title">Статистика</h2>
                    <ul className="statistics-list">
                        <li className="statistics-item">Продано товаров
                            <span>123</span>
                        </li>
                        <li className="statistics-item">Сумма продаж
                            <span>123</span>
                        </li>
                        <li className="statistics-item">Средний чек
                            <span>1234 руб</span>
                        </li>
                        <li className="statistics-item">Среднее колчиство товаров
                            <span>123</span>
                        </li>
                        <li className="statistics-item">Количество посетителей
                            <span>123</span>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
