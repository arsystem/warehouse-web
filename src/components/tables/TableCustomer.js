import React, {Component} from "react";
import PropTypes from "prop-types";

import Spinner from "react-spinner";

class TableCustomer extends Component{
    componentDidMount(){
        this.props.fetchCustomer()
    }

    render(){return this.props.isLoading? <Spinner />: (
        <div className="table-responsive thead-inverse">
            <table className="table table-hover" style={{marginBottom:0}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Customer</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.listCustomer.map((value, index) => {
                        return (<tr key={index}>
                            <td style={{verticalAlign: "middle"}}>{value.id}</td>
                            <td style={{verticalAlign: "middle"}}>{value.nama}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )}
}
TableCustomer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    listCustomer: PropTypes.array.isRequired,
    fetchCustomer: PropTypes.func.isRequired
}
TableCustomer.defaultProps = {
    listCustomer: []
}
export default TableCustomer;