import React, {Component} from "react";
import PropTypes from "prop-types";

import TablePengambilanBarang from "../../containers/tables/TablePengambilanBarang"
import DateRangeForm from "../../containers/forms/DateRangeForm";

class LihatPengambilanBarangPage extends Component{
    render(){return (
        <section>
            <nav className="top-submenu top-submenu-with-background">
                <h3>Lihat Pengambilan Barang</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><span>Pengambilan Barang</span></li>
                </ul>
            </nav>
            <div className="col-lg-12">
                <DateRangeForm onSubmit={this.props.onCariSubmit}/>
            </div>
            <div className="col-lg-12">
                <div className="panel">
                    <div className="panel-body" style={{padding: 0}}>
                        <TablePengambilanBarang/>
                    </div>
                </div>
            </div>
        </section>
    )}
}
LihatPengambilanBarangPage.propTypes = {
    onCariSubmit: PropTypes.func.isRequired
}
LihatPengambilanBarangPage.defaultProps = {
    onCariSubmit: () => {}
}
export default LihatPengambilanBarangPage