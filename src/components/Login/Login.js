import React, { Component } from 'react';
import './../../App.css';
// import callApi from '../../utils/apiCaller';
// import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    onHandleChange = (e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        let { email, password } = this.state
        // callApi()
        this.props.onLogin(email, password)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name='email'
                            value={this.state.username}
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name='password'
                            value={this.state.password}
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;
