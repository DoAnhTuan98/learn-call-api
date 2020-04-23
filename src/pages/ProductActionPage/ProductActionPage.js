import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import {Link} from 'react-router-dom';
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
        console.log(history);
        let { txtName,txtPrice,chkbStatus,id } = this.state;
        if(id) { // update sản phẩm
            callApi(`products/${id}`,'PUT',{
                name : txtName,
                price : txtPrice,
                status : chkbStatus
            }).then(res => {
                history.goBack();
            })
        }
        callApi('products','POST',{ // thêm sản phẩm
            name : txtName,
            price : txtPrice,
            status : chkbStatus
        }).then(res => {
           history.goBack();
        })
    }
    componentDidMount() {
        let { match } = this.props;
        if(match) {
            let id = match.params.id;
            callApi(`products/${id}`,'GET',null).then(res => {
                let data = res.data;
                this.setState({
                    id : data.id,
                    txtName : data.name,
                    txtPrice : data.price,
                    chkbStatus : data.status
                })
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

export default ProductActionPage;
