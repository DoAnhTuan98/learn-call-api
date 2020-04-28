import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import callApi from './../../utils/apiCaller';
import   {actFetchProductsRequest, actDEleteProductRequest}  from '../../actions/index';

class ProductListPage extends Component {

    componentDidMount() {
        console.log('2')
        callApi('products','GET',null).then(res => {
            // this.setState({
            //     products: res.data
            // })
            // this.props.fetchAllProducts(res.data)
            this.props.fetchAllProducts();
        })
    }
    showProducts = (products) => {
        let result = null;
        if(products.length > 0) {
            result = products.map((product,index) => {
                return <ProductItem 
                            key={index}
                            product={product}
                            index={index}
                            deleteItem={this.deleteItem}
                        />
            })
        }
        return result;
    }
    
    deleteItem = (product) => {
        let id = product.id
        if(confirm('bạn chắc chắn muốn xoá ?')) { //eslint-disable-line
            this.props.onDeleteProduct(id);
        }
    }
    render() {
        console.log('1');
        // let {products} = this.state;
        let { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-primary mb-10">
                    Thêm sản phẩm
                </Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }
}


const mapSateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actFetchProductsRequest())
        },
        onDeleteProduct : (id) => {
            dispatch(actDEleteProductRequest(id))
        }
    }
}


export default connect(mapSateToProps,mapDispatchToProps)(ProductListPage);
