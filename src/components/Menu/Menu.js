import React, { Component } from 'react';
import './../../App.css';
import {
    Link,
    useRouteMatch
} from "react-router-dom";

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/product-list',
        exact: false
    },
    {
        name: 'Đăng nhập',
        to: '/login',
        exact: false
    }
]

function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <li className={match ? "active" : ""}>
            <Link to={to} className="nav-link">{label}</Link>
        </li>
    );
}

class Menu extends Component {
    showMenus = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return <MenuLink
                    label={menu.name}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                    key={index} />
            })
        }
        return result;
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-10">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#section">Trang chủ</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#section">Quản lý sản phẩm</a>
                        </li> */}
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;
