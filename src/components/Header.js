import '../css/MainHeader.css'

import MiniHeader from './MiniHeader.js'

import {Link} from "react-router-dom"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import catalog from '../img/icon/catalog.svg'
import sale from '../img/icon/sale.svg'
import heart from '../img/icon/heart 1.png'
import office from '../img/icon/office.png'

function Header() {
    return (
        <div>
            <MiniHeader/>
            <div className="header-nav">
                <div className="container">
                    <div className="header-inner">
                        <div className="menu-inner">
                            <Link className="logo" to="/">
                                <span>LOGO</span>
                            </Link>
                            <nav className="menu">
                                <ul className="menu-list">
                                    <li className="menu-item">
                                        <Link className="menu-link">Каталог</Link>
                                        <img className="menu-icon" src={catalog}
                                             alt=""/>
                                    </li>
                                    <li className="menu-item">
                                        <span className="menu-link">Новинки</span>
                                    </li>
                                    <li className="menu-item">
                                        <span className="menu-link">Акции</span>
                                    </li>
                                    <li className="menu-item">
                                        <span className="menu-link">Скидки</span>
                                        <img className="menu-icon" src={sale} alt="Login"/>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="icon-inner">
                            <form className="search" action="" method="get">
                                <button className="search-button"><FontAwesomeIcon icon={faSearch}/></button>
                                <input className="search-input" name="search" type="search"/>
                            </form>
                            <div className="icon-bar">
                                    <span className="icon-link">
                                        <img src={heart} alt="heart"/>
                                    </span>
                                <Link to="/auth/login">
                                    <img src={office} alt="office"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header

