import React, {Component} from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";
import Spinner from "react-spinner";

class TableBarang extends Component{
    componentDidMount(){
        this.props.fetchBarang();
    }

    render(){return this.props.isLoading? <Spinner />: (
        <div className="table-responsive thead-inverse">
            <table className="table table-hover" style={{marginBottom:0}}>
                <thead>
                    <tr>
                        <th>Barcode</th>
                        <th>Nama Barang</th>
                        <th>Stock</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.listBarang.map((value, index) => {
                        return (<tr key={index}>
                            <td style={{verticalAlign: "middle"}}>{value.barcode}</td>
                            <td style={{verticalAlign: "middle"}}>{value.nama}</td>
                            <td style={{verticalAlign: "middle"}}>{value.stock}</td>
                            <td className="pull-right">
                                <Link to={`/barang/view/${value.barcode}`} className="btn btn-icon btn-primary margin-inline">
                                    <i className="icmn-pencil" aria-hidden="true"></i>
                                </Link>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )}
}
TableBarang.propTypes = {
    listBarang: PropTypes.array.isRequired,
    fetchBarang: PropTypes.func.isRequired
}
TableBarang.defaultProps = {
    listBarang: []
}
export default TableBarang;