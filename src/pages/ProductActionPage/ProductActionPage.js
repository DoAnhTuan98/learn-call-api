import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest,actGetProductRequest, actUpdateProductRequest } from '../../actions';
class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            id : '',
            txtName : '',
            txtPrice : '',
            chkbStatus : ''
        }
    }
    onHandleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        let {history} = this.props;
        let { txtName,txtPrice,chkbStatus,id } = this.state;
        let product = {
            id : id,
            name : txtName,
            price : txtPrice,
            status : chkbStatus
        }
        if(id) { // update sản phẩm
            this.props.onUpdateProduct(product);

        }
        else {
            this.props.onAddProduct(product);
        }
        history.goBack()
    }
    componentDidMount() {
        let { match } = this.props;
        if(match) {
            let id = match.params.id;
            this.props.onGetProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditing) {
            let {itemEditing} =  nextProps;
            this.setState({
                id : itemEditing.id,
                txtName : itemEditing.name,
                txtPrice : itemEditing.price,
                chkbStatus : itemEditing.status
            })
        }

    }
    render() {
        let { txtName,txtPrice,chkbStatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên sản phẩm: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="txtName" value={txtName} 
                            onChange={this.onHandleChange} />
                    </div>
                    <div className="form-group">
                        <label>Giá: </label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="txtPrice" 
                            value={txtPrice} 
                            onChange={this.onHandleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Trạng thái:</label>
                    </div>
                    <div className="form-group form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            name="chkbStatus" 
                            value={chkbStatus} 
                            onChange={this.onHandleChange}
                            checked={chkbStatus}/>
                        <label className="form-check-label">Còn hàng</label>
                    </div>
                    <Link to='/product-list' className='btn btn-danger'>Trở lại</Link>&nbsp;
                    <button type="submit" className="btn btn-primary">Lưu lại</button>  
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddProduct : (product) => {
            dispatch(actAddProductRequest(product))
        },
        onGetProduct : (id) => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct : (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);
