import React, { Component } from 'react';
// import ProductList from './../../components/ProductList/ProductList';
// import ProductItem from './../../components/ProductItem/ProductItem';
// import Taskcontrol from './../../components/Taskcontrol/TaskControl'
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import callApi from './../../utils/apiCaller';
// import { actFetchProductsRequest, actDEleteProductRequest, filterNameProductRequest } from '../../actions/index';
import Login from '../../components/Login/Login';

class LoginPage extends Component {

    onLogin = (email, password) => {
        let user = {
            email,
            password
        }
        console.log(user)
        callApi('auth/sign-in', 'POST', user).then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.accessToken)
            window.location.href = '/product-list'

        })
    }
    render() {
        return (
            <Login onLogin={this.onLogin} />
        )
    }
}


const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
