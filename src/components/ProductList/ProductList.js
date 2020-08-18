import React, { Component } from 'react';
import './../../App.css';

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterName: '',
            filterStatus: ''
        }
    }
    onChange = (event) => {
        let target = event.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        })
        this.props.onFilterNameProduct(value)
    }
    onChangeName = (event) => {
        let { filterName } = this.state
        let target = event.target
        let name = target.name
        let value = target.value
        this.setState({
            filterStatus: value
        })
        this.props.onFilterNameProduct(filterName, value)
        console.log(this.state)
    }

    // componentDidUpdate() {
    //     let { filterName, filterStatus } = this.state
    //     this.props.onFilterProduct(filterName, filterStatus)
    // }
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
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="filterName"
                                        onChange={this.onChange}
                                        value={this.state.filerName}
                                    />
                                </td>
                                <td></td>
                                <td>
                                    <select
                                        className="form-control"
                                        name="filterStatus"
                                        onChange={this.onChangeName}
                                        value={this.state.filerName}
                                    >
                                        <option value={-1}>Tất Cả</option>
                                        <option value={0}>Hết hàng</option>
                                        <option value={1}>Còn hàng</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductList;
