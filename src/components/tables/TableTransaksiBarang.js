import React, {Component} from "react";
import PropTypes from "prop-types";

class TableTransaksiBarang extends Component{
    constructor(props){
        super(props);
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
                    <th className="text-right" style={{width: "10%"}}>QTY</th>
                    <th style={{width: "5%"}}></th>
                </tr></thead>
                <tbody>
                    {this.props.listBarang.map((value, index) => {this.totalQty += value.qty; return (
                        <tr key={index}>
                            <td style={{verticalAlign: "middle"}}>{value.barcode}</td>
                            <td style={{verticalAlign: "middle"}}>{value.nama}</td>
                            <td style={{verticalAlign: "middle"}} className="text-right">{value.qty}</td>
                            <td><button className="btn btn-icon btn-danger margin-inline" onClick={() => {this.props.deleteEntry(index)}}>
                                <i className="icmn-bin" aria-hidden="true"></i>
                            </button></td>
                        </tr>
                    )})}
                    <tr><td></td><td></td><td></td></tr>
                </tbody>
                <tfoot><tr>
                    <th></th>
                    <th className="text-right">Total QTY</th>
                    <th className="text-right">{this.totalQty}</th>
                    <th></th>
                </tr></tfoot>
            </table>
        </div>
    )}
}
TableTransaksiBarang.propTypes = {
    deleteEntry: PropTypes.func.isRequired
}
TableTransaksiBarang.defaultProps = {
    listBarang: []
}
export default TableTransaksiBarang