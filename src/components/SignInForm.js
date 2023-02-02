import React, {Component} from "react";
import { createBrowserHistory } from "history";
import axios from "axios" ;
import {redirect} from "react-router-dom";

class SignInForm extends Component {

    constructor(props) {
        super(props);

        this.history = createBrowserHistory();
    }


    state = {
        account: {
            login: "",
            password: ""
        },
        errors: {}
    };

    handleChangeRoute = () => {
        window.location.reload();
    };


    validate = () => {
        const errors = {};

        const {account} = this.state;
        if (account.login.trim() === '') {
            errors.login = 'login is required!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Password is required!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = (event) => {//odbieranie eventów
        event.preventDefault();//zabezpieczenie przed ciagłym odswieżaniem

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        console.log(this.state)

        axios({//łaczenie z serwerem
            method: 'post',
            url: 'https://at.usermd.net/api/user/auth',
            data: {
                login: this.state.account.login,
                password: this.state.account.password
            }
        }).then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            this.handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.password = 'Given login does\'t exists or password is wrong!';
            this.setState({errors: errors || {}});
            console.log(error);
        });
    };

    handleChange = (event) => {//używane podczas zmiany w formularzu
        console.log(this.state.account);
        const account = {...this.state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({account});
    };

    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="login">Name</label>
                        <input value={this.state.account.login}
                               name="login"
                               onChange={this.handleChange}
                               type="text"
                               className="form-control"
                               id="login"
                               aria-describedby="emailHelp"
                               placeholder="login"/>
                        {this.state.errors.login &&
                            <div className="alert alert-danger">{this.state.errors.login}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={this.state.account.password}
                               name="password"
                               onChange={this.handleChange}
                               type="password"
                               className="form-control"
                               id="password"
                               placeholder="Password"/>
                        {this.state.errors.password &&
                            <div className="alert alert-danger">{this.state.errors.password}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">SignUp</button>
                </form>

            </div>
        );
    }
}

export default SignInForm;
