import React, { Component } from 'react';
// import Button from '../../common/Button'

class LoginTemplate extends Component {

    
    
    render() {
        const { username, password, handleSubmit, handleChange, handleKeyPress } = this.props;

        return (
            <div className="">
                <h2>Login</h2>
                <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" 
                                className="form-control"
                                name="password"
                                placeholder="비밀번호를 입력하세요"
                                value={password}
                                onChange={handleChange}
                                onkeyPress={handleKeyPress}
                        />
                    {/* { error && <div className="fail">로그인에 실패하였습니다.</div>} */}
                    <div className="form-group">
                        <button className="btn-btn-primarty">Login</button>
                        <button className="btn-btn-link">register</button>
                        {/* <Button className="btn btn-primary">Login</Button> /> */}
                        {/* <link to="/register" className="btn btn-link">Register</link> */}
                    </div>
                
                    </div>
                </form>
                
            </div>
        );
    }
}

export default LoginTemplate;