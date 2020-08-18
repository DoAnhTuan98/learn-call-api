import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
// import Login from './components/Login/Login';
import LoginPage from './pages/LoginPage/LoginPage';


const routes = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage />
    },
    {
        path: "/product-list", // hiển thị ds sản phẩm
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: "/product/add", // thêm sản phẩm 
        exact: false,
        main: ({ history }) => <ProductActionPage history={history} />
    },
    {
        path: "/product/:id/edit",  // sửa sản phẩm 
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={match} history={history} />
    },
    {
        path: "/login",
        exact: false,
        main: () => <LoginPage />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFoundPage />
    },

];

export default routes;