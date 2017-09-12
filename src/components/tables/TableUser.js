import React, {Component} from "react";
import PropTypes from "prop-types";

import Spinner from "react-spinner";

class TableUser extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){return this.props.isLoading? <Spinner />: (
        <div className="table-responsive thead-inverse">
            <table className="table table-hover" style={{marginBottom:0}}>
                <thead><tr>
                    <th>ID</th>
                    <th>Nama User</th>
                </tr></thead>
                <tbody>
                    {this.props.listUser.map((value, index) => {
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
TableUser.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    listUser: PropTypes.array.isRequired,
    fetchUser: PropTypes.func.isRequired
}
TableUser.defaultProps = {
    listUser: []
}
export default TableUser;