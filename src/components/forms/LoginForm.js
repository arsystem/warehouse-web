import React, {Component} from "react";
import PropTypes from "prop-types";

import Spinner from "react-spinner";

class LoginForm extends Component{

    render(){
        if(this.props.isError){
            window.$.notify({message: "Username atau Password salah"},{
                type: "danger",
                delay: 1000,
                placement: {align: "center"}
            })
        }

        return this.props.isLoading? <Spinner/> : (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label className="form-label">Username</label>
                    <input 
                        className="form-control" 
                        placeholder="Username"
                        value={this.props.username}
                        onChange={this.props.onUsernameChange}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input 
                        className="form-control password" 
                        type="password" 
                        placeholder="Password"
                        value={this.props.password}
                        onChange={this.props.onPasswordChange} />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn btn-primary width-150">Sign In</button>
                </div>
            </form>
        )
    }
}
LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    onUsernameChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
export default LoginForm