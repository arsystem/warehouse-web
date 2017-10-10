import React, {Component} from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";
import Spinner from "react-spinner";
import NumberFormat from "react-number-format";

class TablePengambilanBarang extends Component{
    componentDidMount(){
        this.props.fetchPengambilanBarang()
    }

    render(){return (this.props.isLoading)? <Spinner/> : (
        <div className="table-responsive thead-inverse">
            <table className="table table-hover" style={{marginBottom:0}}>
                <thead>
                    <tr>
                        <th>Tanggal Ambil</th>
                        <th>Nama Customer</th>
                        <th className="text-right">Ttl. Barang Keluar</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{this.props.listPengambilanBarang.map((item, index) => {return (
                    <tr key={index}>
                        <td style={{verticalAlign: "middle"}}>{item.tanggalAmbil}</td>
                        <td style={{verticalAlign: "middle"}}>{item.namaCustomer}</td>
                        <td className="text-right" style={{verticalAlign: "middle"}}>
                            <NumberFormat value={item.totalBarangKeluar} displayType={'text'} thousandSeparator={true} />
                        </td>
                        <td className="pull-right">
                            <Link to={`/pengambilan_barang/view/${item.id}`} className="btn btn-icon btn-primary margin-inline">
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
TablePengambilanBarang.propTypes = {
    listPengambilanBarang: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    fetchPengambilanBarang: PropTypes.func.isRequired
}
TablePengambilanBarang.defaultProps = {
    isLoading: true,
    listPengambilanBarang: []
}
export default TablePengambilanBarang;