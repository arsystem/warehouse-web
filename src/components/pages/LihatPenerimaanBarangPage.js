import React, {Component} from "react";
import PropTypes from "prop-types";

import TablePenerimaanBarang from "../../containers/tables/TablePenerimaanBarang"
import DateRangeForm from "../../containers/forms/DateRangeForm";

class LihatPenerimaanBarangPage extends Component{
    render(){return (
        <section>
            <nav className="top-submenu top-submenu-with-background">
                <h3>Lihat Penerimaan Barang</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><span>Penerimaan Barang</span></li>
                </ul>
            </nav>
            <div className="col-lg-12">
                <DateRangeForm onSubmit={this.props.onCariSubmit}/>
            </div>
            <div className="col-lg-12">
                <div className="panel">
                    <div className="panel-body" style={{padding: 0}}>
                        <TablePenerimaanBarang/>
                    </div>
                </div>
            </div>
        </section>
    )}
}
LihatPenerimaanBarangPage.propTypes = {
    onCariSubmit: PropTypes.func.isRequired
}
LihatPenerimaanBarangPage.defaultProps = {
    onCariSubmit: () => {}
}
export default LihatPenerimaanBarangPage