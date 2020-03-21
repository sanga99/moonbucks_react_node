import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class LoginTemplate extends Component {

    
    
    render() {
        // const { userId, password, handleSubmit, handleChangeId, handleChangePw, handleKeyPress ,handleTest, error} = this.props;

        return (
            <div className="">
                <h2>Login</h2>
                <div>{this.props.error}</div>
                <form action="/api/login" method="post">
                    <div className="form-group">
                        <label>UserId</label>
                        <input type="text"
                                className="form-control"
                                name="userId"
                                placeholder=" test@google.com 입니다. "
                                // value={userId}
                                // onChange={handleChangeId}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" 
                                className="form-control"
                                name="password"
                                placeholder=" test01# 입니다. "
                                // value={password}
                                // onChange={handleChangePw}
                                // onKeyPress={handleKeyPress}
                        />
                    <div className="form-group">
                        <input  type="submit" value="Login" />
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                
                    </div>
                </form>
                
            </div>
        );
    }
}

export default LoginTemplate;