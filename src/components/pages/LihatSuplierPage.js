import React, {Component} from "react";

import TableSuplier from "../../containers/tables/TableSuplier";

class LihatSuplierPage extends Component{
    render(){return (
        <section>
            <nav className="top-submenu top-submenu-with-background">
                <h3>Lihat Suplier</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><span>Suplier</span></li>
                </ul>
            </nav>
            <div className="col-lg-12">
                <div className="panel">
                    <div className="panel-body" style={{padding: 0}}>
                        <TableSuplier/>
                    </div>
                </div>
            </div>
        </section>
    )}
}
export default LihatSuplierPage;