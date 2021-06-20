import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Component} from "react";
import Register from "./Register";
import axios from "axios";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            email: '',
            password: '',
            passwordValid: false,
            emailValid: false
        };
    }

    componentDidMount() {
        if (localStorage.getItem('auth')) {
            fetch('https://evrostroi.loc/api/v1/me', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('auth'),
                    Accept: 'application/json'
                }
            }).then(response => response.json())
                .then(data => {
                    if (data !== null) {
                        window.location.href = '/lk'
                    }
                })
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,3}))$/
        if (regex.test(this.state.email)) {
            this.setState({
                emailValid: true
            })
        }
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })

        if (this.state.password.length >= 8) {
            this.setState({
                passwordValid: true
            })
        }
    }

    handleSubmitForm = (event) => {
        let username = this.state.email;
        let password = this.state.password;

        fetch('https://evrostroi.loc/api/v1/auth/login', {
            // mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: username,
                password: password
            })
        }).then(response => response.json())
            .then(data => {
                localStorage.setItem('auth', data.data)
                window.location.href = '/';
            });
    }

    render() {
        return (
            <Router forceRefresh={true}>
                <div>
                    <div className="container">
                        <div className="form-wrapper">
                            <div className="form-authorization">
                                <form>
                                    <h2 className="form-title">Авторизация</h2>
                                    <div className="email-wrapper">
                                        <label htmlFor="myInput" className="email-tex">Email</label>
                                        <input className="email-input" type="email" name="myInput" size="30" required
                                               value={this.state.email} onChange={this.handleEmailChange}/>
                                    </div>
                                    <div className="password-wrapper">
                                        <label className="password-text" htmlFor="myPassword">Пароль</label>
                                        <input className="password-input" type="password" name="myPassword" size="20"
                                               value={this.state.password} onChange={this.handlePasswordChange}
                                               required/>
                                    </div>
                                    <div className="checkbox-wrapper">
                                        <label className="checkbox-text"><input className="checkbox-input"
                                                                                type="checkbox"
                                                                                name="myCheckbox"/>Запомнить
                                            меня</label>
                                    </div>

                                </form>
                                <div className="form-button">
                                    <button className="input-submit"
                                            onClick={this.handleSubmitForm}
                                            name="myInput" value="Войти"
                                            autoFocus>Войти
                                    </button>
                                </div>
                                <div className="sign-up">
                                    <span>Впервые у нас? <Link className="sign-up-link" to="/auth/reg">Зарегистрируйтесь</Link></span>
                                </div>
                            </div>
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
