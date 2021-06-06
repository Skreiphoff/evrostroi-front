import {Component} from "react";

export default class Register extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return(
            <div className="container">
                <div className="form-wrapper">
                    <form className="form-registration" action="" method="post">
                        <h2 className="form-registration-title">Авторизация</h2>
                        <div className="wrapper-form">
                            <label className="surname" htmlFor="surname">Фамилия</label>
                            <input className="wrapper-input" type="text" name="surname" size="30" required/>
                        </div>
                        <div className="wrapper-form">
                            <label className="name-form" htmlFor="name">Имя</label>
                            <input className="wrapper-input" type="text" name="name" size="30" required/>
                        </div>
                        <div className="wrapper-form">
                            <label className="patronymic-form" htmlFor="patronymic">Отчество</label>
                            <input className="wrapper-input" type="text" name="patronymic" size="30" required/>
                        </div>
                        <div className="wrapper-form">
                            <label className="password-form" htmlFor="password">Пароль</label>
                            <input className="wrapper-input" type="password" name="password" size="20" required/>
                        </div>
                        <div className="wrapper-form-check">
                            <label className="check-password-form" htmlFor="check-password">Подтверждение <br/>пароля</label>
                            <input className="wrapper-input-check" type="password" name="check-password" size="20"
                                   required/>
                        </div>
                        <div className="form-registration-button">
                            <input className="registration-input-submit" type="submit" name="myInput"
                                   value="Регистрация" autoFocus/>
                        </div>
                    </form>
                </div>
            </div>
    );
    }
}
