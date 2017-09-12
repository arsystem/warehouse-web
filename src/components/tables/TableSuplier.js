import React, {Component} from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";
import Spinner from "react-spinner";

class TableSuplier extends Component{
    componentDidMount(){
        this.props.fetchSuplier()
    }

    render(){return this.props.isLoading? <Spinner />: (
        <div className="table-responsive thead-inverse">
            <table className="table table-hover" style={{marginBottom:0}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Suplier</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.listSuplier.map((value, index) => {
                        return (<tr key={index}>
                            <td style={{verticalAlign: "middle"}}>{value.id}</td>
                            <td style={{verticalAlign: "middle"}}>{value.nama}</td>
                            <td className="pull-right">
                                <Link to={`/suplier/view/${value.id}`} className="btn btn-icon btn-primary margin-inline">
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
TableSuplier.propTypes = {
    listSuplier: PropTypes.array.isRequired,
    fetchSuplier: PropTypes.func.isRequired
}
TableSuplier.defaultProps = {
    listSuplier: []
}
export default TableSuplier;