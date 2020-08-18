import * as Types from './../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return async (dispatch) => {
        const res = await callApi('product', 'GET', null);
        dispatch(actFetchProducts(res.data));
    }
};

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
};

export const actDEleteProductRequest = (id) => {
    return async (dispatch) => {
        const res = await callApi(`product/${id}`, 'DELETE', null);
        dispatch(actDEleteProduct(id));
    }
};

export const actDEleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
};

export const actAddProductRequest = (product) => {
    if (!product.status) {
        product.status = false
    }
    return async (dispatch) => {
        const res = await callApi('product', 'POST', product);
        dispatch(actAddProduct(res.data));
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
};

export const actGetProductRequest = (id) => {
    return async (dispatch) => {
        const res = await callApi(`product/${id}`, 'GET', null);
        dispatch(actGetProduct(res.data));
    }
};

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        callApi(`product/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data))
        })
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}

export const filterNameProductRequest = (name, status) => {
    return async (dispatch) => {
        let res = await callApi(`product?name=${name}&status=${status}`, 'GET', null)
        dispatch(filterNameProduct(res.data))
    }
}

export const filterNameProduct = (products) => {
    return {
        type: Types.FILTER_NAME_PRODUCT,
        products
    }
}

export const onLoginSuccess = () => {
    return {
        type: Types.STATUS_LOGIN_TRUE
    }
}

export const onLoginFail = () => {
    return {
        type: Types.STATUS_LOGIN_FALSE
    }
}