import React, {Component} from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";
import Spinner from "react-spinner";
import NumberFormat from "react-number-format";

class TablePenerimaanBarang extends Component{
    componentDidMount(){
        this.props.fetchPenerimaanBarang()
    }

    render(){return (this.props.isLoading)? <Spinner/> : (
        <div className="table-responsive thead-inverse">
            <table className="table table-hover" style={{marginBottom:0}}>
                <thead>
                    <tr>
                        <th>Tanggal Terima</th>
                        <th>Nama Suplier</th>
                        <th className="text-right">Ttl. Barang Masuk</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{this.props.listPenerimaanBarang.map((item, index) => {return (
                    <tr key={index}>
                        <td style={{verticalAlign: "middle"}}>{item.tanggalTerima}</td>
                        <td style={{verticalAlign: "middle"}}>{item.namaSuplier}</td>
                        <td className="text-right" style={{verticalAlign: "middle"}}>
                            <NumberFormat value={item.totalBarangMasuk} displayType={'text'} thousandSeparator={true} />
                        </td>
                        <td className="pull-right">
                            <Link to={`/penerimaan_barang/view/${item.id}`} className="btn btn-icon btn-primary margin-inline">
                                <i className="icmn-eye" aria-hidden="true"></i>
                            </Link>
                        </td>
                    </tr>
                )})}
                </tbody>
            </table>
        </div>
    )}
}
TablePenerimaanBarang.propTypes = {
    listPenerimaanBarang: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    fetchPenerimaanBarang: PropTypes.func.isRequired
}
TablePenerimaanBarang.defaultProps = {
    isLoading: true,
    listPenerimaanBarang: []
}
export default TablePenerimaanBarang;