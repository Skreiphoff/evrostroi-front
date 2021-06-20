import {Component} from "react";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            password_confirmed: '',
            passwordValid: false,
            emailValid: false,
            passwordConfirmed: false
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSurnameChange = (event) => {
        this.setState({
            surname: event.target.value
        })
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

    handlePasswordConfirmedChange = (event) => {
        this.setState({
            password_confirmed: event.target.value
        })

        if (this.state.password === this.state.password_confirmed) {
            this.setState({
                passwordConfirmed: true
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="form-wrapper">
                    <div className="form-registration">
                        <form method="post">
                            <h2 className="form-registration-title">Авторизация</h2>
                            <div className="wrapper-form">
                                <label className="surname" htmlFor="surname">Фамилия</label>
                                <input className="wrapper-input" type="text" name="surname" value={this.state.surname}
                                       onChange={this.handleSurnameChange} onPaste={this.handleSurnameChange} size="30" required/>
                            </div>
                            <div className="wrapper-form">
                                <label className="name-form" htmlFor="name">Имя</label>
                                <input className="wrapper-input" type="text" name="name" value={this.state.name}
                                       onChange={this.handleNameChange} onPaste={this.handleNameChange} size="30" required/>
                            </div>
                            <div className="wrapper-form">
                                <label className="patronymic-form" htmlFor="email">Email</label>
                                <input className="wrapper-input" type="text" name="email" size="30"
                                       value={this.state.email} onChange={this.handleEmailChange} onPaste={this.handleEmailChange} required/>
                            </div>
                            <div className="wrapper-form">
                                <label className="password-form" htmlFor="password">Пароль</label>
                                <input className="wrapper-input" type="password" name="password"
                                       value={this.state.password} onChange={this.handlePasswordChange} size="20"
                                       required/>
                            </div>
                            <div className="wrapper-form-check">
                                <label className="check-password-form"
                                       htmlFor="password_confirmed">Подтверждение <br/>пароля</label>
                                <input className="wrapper-input-check" type="password" name="password_confirmed"
                                       value={this.state.password_confirmed}
                                       onChange={this.handlePasswordConfirmedChange} size="20"
                                       required/>
                            </div>
                        </form>
                        <div className="form-registration-button">
                            <input className="registration-input-submit" type="submit" name="myInput"
                                   value="Регистрация" autoFocus
                                   onClick={this.handleSend}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleSend = (event) => {
        fetch('https://evrostroi.loc/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                surname: this.state.surname,
                email: this.state.email,
                password: this.state.password,
            })
        }).then(response => response.json())
            .then(data => {
                if (data.status !== "error") {
                    localStorage.setItem('auth', data.access_token)
                    window.location.href = '/lk';
                } else {
                    for (let i = 0; i < data.message.length; i++) {
                        console.log(data.message[i]);
                    }
                }
            })

    }
}
