import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Component} from "react";
import Register from "./Register";
import axios from "axios";


export default class Login extends Component
{
    constructor(props) {
        let user = axios.get('https://evrostroi.loc/api/v1/user');
        console.log(user);
        super(props);
    }

    componentDidMount() {
        // console.log(this.props)
    }

    render() {
        return(
            <Router forceRefresh={true}>
                <div>
                    <div className="container">
                        <div className="form-wrapper">
                            <form className="form-authorization" action="" method="post">
                                <h2 className="form-title">Авторизация</h2>
                                <div className="email-wrapper">
                                    <label htmlFor="myInput" className="email-tex">Email</label>
                                    <input className="email-input" type="email" name="myInput" size="30" required/>
                                </div>
                                <div className="password-wrapper">
                                    <label className="password-text" htmlFor="myPassword">Пароль</label>
                                    <input className="password-input" type="password" name="myPassword" size="20" required/>
                                </div>
                                <div className="checkbox-wrapper">
                                    <label className="checkbox-text"><input className="checkbox-input" type="checkbox" name="myCheckbox"/>Запомнить меня</label>
                                </div>
                                <div className="form-button">
                                    <input className="input-submit" type="submit" name="myInput" value="Войти" autoFocus/>
                                </div>
                                <div className="sign-up">
                                    <span>Впервые у нас?<Link className="sign-up-link" to="/auth/reg">Зарегистрируйтесь</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Switch>
                    <Route exact path="/auth/reg">
                        <Register/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
