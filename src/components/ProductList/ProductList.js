import React, { Component } from 'react';
import './../../App.css';

class ProductList extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Danh sách sản phẩm
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã SP</th>
                                <th>Tên SP</th>
                                <th>Giá</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default ProductList;
