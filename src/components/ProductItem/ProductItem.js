import React, { Component } from 'react';
import './../../App.css';
import { Link } from 'react-router-dom';
class ProductItem extends Component {
    // constructor(props){
       
    // }

    render() {
        let { product,index,deleteItem } = this.props;
        let statusName = product.status ? "Còn hàng" : "Hết hàng"
        
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className="label lable-warning">
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link to={`product/${product.id}/edit`} className="btn btn-success">
                        Sửa
                    </Link>&nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => deleteItem(product)}>
                        Xoá
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
