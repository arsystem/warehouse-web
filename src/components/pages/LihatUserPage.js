import React, {Component} from "react";

import TableUser from "../../containers/tables/TableUser";

class LihatUserPage extends Component{
    render(){return (
        <section>
            <nav className="top-submenu top-submenu-with-background">
                <h3>Lihat User</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><span>User</span></li>
                </ul>
            </nav>
            <div className="col-lg-12">
                <div className="panel">
                    <div className="panel-body" style={{padding: 0}}>
                        <TableUser/>
                    </div>
                </div>
            </div>
        </section>
    )}
}
export default LihatUserPage