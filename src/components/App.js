import React, {Component} from "react";
import PropTypes from "prop-types";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

class App extends Component{
    render(){
        if(!this.props.loggedIn){
            return <LoginPage/>
        }
        return <MainPage/>
    }
}
App.propTypes = {
    loggedIn: PropTypes.bool.isRequired
}
export default App;