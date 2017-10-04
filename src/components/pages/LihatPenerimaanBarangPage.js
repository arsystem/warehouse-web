import React, {Component} from "react";

import TablePenerimaanBarang from "../../containers/tables/TablePenerimaanBarang"

class LihatPenerimaanbarangPage extends Component{
    render(){return (
        <section>
            <nav className="top-submenu top-submenu-with-background">
                <h3>Lihat Penerimaan Barang</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><span>Penerimaan Barang</span></li>
                </ul>
            </nav>
            <div className="col-lg-12">
                <h3>Bulan {window.moment().format("MMMM")}</h3>
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
export default LihatPenerimaanbarangPage