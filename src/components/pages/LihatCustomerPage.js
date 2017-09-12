import React, {Component} from "react";

import TableCustomer from "../../containers/tables/TableCustomer";

class LihatCustomerPage extends Component{
    render(){return (
        <section>
            <nav className="top-submenu top-submenu-with-background">
                <h3>Lihat Customer</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><span>Customer</span></li>
                </ul>
            </nav>
            <div className="col-lg-12">
                <div className="panel">
                    <div className="panel-body" style={{padding: 0}}>
                        <TableCustomer/>
                    </div>
                </div>
            </div>
        </section>
    )}
}
export default LihatCustomerPage;