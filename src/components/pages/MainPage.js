import React, {Component} from "react";

import {Route} from "react-router-dom";

import LeftMenu from "../menus/LeftMenu";
import LeftMenuLogo from "../menus/LeftMenuLogo";
import LeftMenuItemContainer from "../menus/LeftMenuItemContainer";
import LeftMenuItemWithSubmenu from "../menus/LeftMenuItemWithSubmenu"
import LeftMenuItem from "../menus/LeftMenuItem";

import InputBarangPage from "./InputBarangPage";
import InputSuplierPage from "./InputSuplierPage";
import InputUserPage from "./InputUserPage";
import InputCustomerPage from "./InputCustomerPage";
import InputPenerimaanBarangPage from "../../containers/pages/InputPenerimaanBarangPage";
import InputPengambilanBarangPage from "../../containers/pages/InputPengambilanBarangPage";

import DetailBarangPage from "./DetailBarangPage";
import DetailPenerimaanBarangPage from "../../containers/pages/DetailPenerimaanBarangPage";

import LihatBarangPage from "../../containers/pages/LihatBarangPage";
import LihatSuplierPage from "./LihatSuplierPage";
import LihatUserPage from "./LihatUserPage";
import LihatCustomerPage from "./LihatCustomerPage";
import LihatPenerimaanBarangPage from "../../containers/pages/LihatPenerimaanBarangPage";

class MainPage extends Component{
    componentWillMount(){
        document.body.className = document.body.className.replace("single-page", "");
    }

    render(){return (
        <section>
            <LeftMenu>
                <LeftMenuLogo/>
                <LeftMenuItemContainer>
                    <LeftMenuItemWithSubmenu title="Barang" icon="icmn-database">
                        <LeftMenuItem title="Lihat Barang" link="/barang"/>
                        <LeftMenuItem title="Input Barang" link="/barang/input"/>
                    </LeftMenuItemWithSubmenu>
                    <LeftMenuItemWithSubmenu title="Suplier" icon="icmn-collaboration">
                        <LeftMenuItem title="Lihat Suplier" link="/suplier"/>
                        <LeftMenuItem title="Input Suplier" link="/suplier/input"/>
                    </LeftMenuItemWithSubmenu>
                    <LeftMenuItemWithSubmenu title="Customer" icon="icmn-vcard">
                        <LeftMenuItem title="Lihat Customer" link="/customer"/>
                        <LeftMenuItem title="Input Customer" link="/customer/input"/>
                    </LeftMenuItemWithSubmenu>
                    <LeftMenuItemWithSubmenu title="Penerimaan Barang" icon="icmn-download2">
                        <LeftMenuItem title="Lihat Penerimaan Barang" link="/penerimaan_barang"/>
                        <LeftMenuItem title="Input Penerimaan Barang" link="/penerimaan_barang/input"/>
                    </LeftMenuItemWithSubmenu>
                    <LeftMenuItemWithSubmenu title="Pengambilan Barang" icon="icmn-upload2">
                        <LeftMenuItem title="Input Pengambilan Barang" link="/pengambilan_barang/input"/>
                    </LeftMenuItemWithSubmenu>
                    <LeftMenuItemWithSubmenu title="User" icon="icmn-users">
                        <LeftMenuItem title="Lihat User" link="/user"/>
                        <LeftMenuItem title="Input User" link="/user/input"/>
                    </LeftMenuItemWithSubmenu>
                </LeftMenuItemContainer>
            </LeftMenu>
            <nav className="top-menu">
                <div className="menu-icon-container hidden-md-up">
                    <div className="animate-menu-button left-menu-toggle">
                        <div></div>
                    </div>
                </div>
            </nav>
            <section className="page-content">
                <div className="page-content-inner">
                    <Route exact path="/barang" component={LihatBarangPage}/>
                    <Route exact path="/barang/input" component={InputBarangPage}/>
                    <Route exact path="/barang/view/:barcode" component={DetailBarangPage}/>
                    
                    <Route exact path="/customer" component={LihatCustomerPage}/>
                    <Route exact path="/customer/input" component={InputCustomerPage}/>

                    <Route exact path="/suplier" component={LihatSuplierPage}/>
                    <Route exact path="/suplier/input" component={InputSuplierPage}/>

                    <Route exact path="/user" component={LihatUserPage}/>
                    <Route exact path="/user/input" component={InputUserPage}/>

                    <Route exact path="/penerimaan_barang" component={LihatPenerimaanBarangPage}/>
                    <Route exact path="/penerimaan_barang/input" component={InputPenerimaanBarangPage}/>
                    <Route exact path="/penerimaan_barang/view/:id" component={DetailPenerimaanBarangPage}/>

                    <Route exact path="/pengambilan_barang/input" component={InputPengambilanBarangPage}/>
                </div>
            </section>
        </section>
    )}
}
export default MainPage