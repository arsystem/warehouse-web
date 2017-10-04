import React, {Component} from "react";
import PropTypes from "prop-types";

import NumberFormat from "react-number-format";

class TableTransaksiBarang extends Component{
    constructor(props){
        super(props);
        this.totalQty = 0;
    }

    componentDidMount(){
        this.totalQty = 0;
    }

    componentDidUpdate(){
        this.totalQty = 0;
    }

    render(){return (
        <div className="table-responsive thead-inverse">
            <table className="table table-hover" style={{marginBottom:0}}>
                <thead><tr>
                    <th style={{width: "35%"}}>Barcode</th>
                    <th style={{width: "50%"}}>Nama Barang</th>
                    {(this.props.canDelete)? 
                        <th className="text-right" style={{width: "10%"}}>QTY</th>
                    : 
                        <th className="text-right" style={{width: "15%"}}>QTY</th>
                    }
                    {(this.props.canDelete)? <th style={{width: "5%"}}></th>: ""}
                </tr></thead>
                <tbody>
                    {this.props.listBarang.map((value, index) => {this.totalQty += value.qty; return (
                        <tr key={index}>
                            <td style={{verticalAlign: "middle"}}>{value.barcode}</td>
                            <td style={{verticalAlign: "middle"}}>{value.nama}</td>
                            <td style={{verticalAlign: "middle"}} className="text-right"><NumberFormat value={value.qty} displayType={'text'} thousandSeparator={true} /></td>
                            {(this.props.canDelete)? (
                                <td><button className="btn btn-icon btn-danger margin-inline" onClick={() => {this.props.deleteEntry(index)}}>
                                    <i className="icmn-bin" aria-hidden="true"></i>
                                </button></td>
                            ): ""}
                        </tr>
                    )})}
                    <tr><td></td><td></td><td></td></tr>
                </tbody>
                <tfoot><tr>
                    <th></th>
                    <th className="text-right">Total QTY</th>
                    <th className="text-right"><NumberFormat value={this.totalQty} displayType={'text'} thousandSeparator={true} /></th>
                    {(this.props.canDelete)? <th></th>: ""}
                </tr></tfoot>
            </table>
        </div>
    )}
}
TableTransaksiBarang.propTypes = {
    canDelete: PropTypes.bool.isRequired,
    deleteEntry: PropTypes.func.isRequired,
    clearListBarang: PropTypes.func.isRequired,
    deleteEntry: PropTypes.func
}
TableTransaksiBarang.defaultProps = {
    canDelete: true,
    listBarang: []
}
export default TableTransaksiBarang