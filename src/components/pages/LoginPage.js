import React, {Component} from "react";

import LoginForm from "../../containers/forms/LoginForm";

class LoginPageHeader extends Component{
    render(){return (
        <div className="single-page-block-header">
            <div className="row">
                <div className="col-lg-4">
                    <div className="logo">
                        <a href="javascript: history.back();">
                            <img src="/assets/common/img/logo-inverse.png" alt="Clean UI Admin Template" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )}
}

class LoginPageBody extends Component{
    render(){return(
        <div className="single-page-block">
            <div className="row">
                <div className="col-xl-12">
                    <div className="single-page-block-inner">
                        <div className="single-page-block-form">
                            <h3 className="text-center">
                                <i className="icmn-enter margin-right-10"></i>
                                Login Form
                            </h3>
                            <LoginForm/>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
}

class LoginPage extends Component{
    componentWillMount(){
        document.body.className += " " + "single-page"
        document.getElementById("app").style.height = "100%"
    }

    render(){return (
        <section className="page-content">
            <div className="page-content-inner single-page-login-alpha" style={{backgroundImage: "url(/assets/common/img/temp/login/5.jpg)"}}>
                <LoginPageHeader/>
                <LoginPageBody />
                <div className="single-page-block-footer text-center">
                </div>
            </div>
        </section>
    )}
}
export default LoginPage