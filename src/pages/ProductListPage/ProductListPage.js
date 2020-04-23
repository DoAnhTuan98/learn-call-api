import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import callApi from './../../utils/apiCaller';
import   {actFetchProductsRequest}  from '../../actions/index';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : []
        }
        
    }
    componentDidMount() {
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
        // let { products } = this.state;
        let { products } = this.props;
        let id = product.id
        if(confirm('bạn chắc chắn muốn xoá ?')) { //eslint-disable-line
            callApi(`products/${id}`,'DELETE',null).then(res => {
                // callApi('products','GET',null).then(res => {
                //     this.setState({
                //         products: res.data
                //     })
                // })
                if(res.status === 200) {
                    let index = this.findIndex(products,id);
                    if(index !== -1) {
                        products.splice(index,1);
                        this.setState({
                            products : products
                        })
                    }
                }
            })
        }  
    }
    findIndex = (products,id) => {
        var result = -1;
        products.forEach((product,index) => {
            if(product.id === id) {
                result = index;
            }
        });
        return result
    }
    render() {
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
        }
    }
}


export default connect(mapSateToProps,mapDispatchToProps)(ProductListPage);
