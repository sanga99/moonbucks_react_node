import React, { Component } from 'react';


class LoginTemplate extends Component {

    
    
    render() {
        const { userId, password, handleSubmit, handleChangeId, handleChangePw, handleKeyPress ,handleTest} = this.props;

        return (
            <div className="">
                <h2>Login</h2>
                <form action="/api/login" method="post">
                    <div className="form-group">
                        <label>UserId</label>
                        <input type="text"
                                className="form-control"
                                name="userId"
                                value={userId}
                                onChange={handleChangeId}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" 
                                className="form-control"
                                name="password"
                                placeholder="비밀번호를 입력하세요"
                                value={password}
                                onChange={handleChangePw}
                                onKeyPress={handleKeyPress}
                        />
                    {/* { error && <div className="fail">로그인에 실패하였습니다.</div>} */}
                    <div className="form-group">
                        <input  type="submit" value="Login" />
                        <button  onClick={handleTest}>Login</button>
                        <button className="btn-btn-link">register</button>
                        {/* <link to="/register" className="btn btn-link">Register</link> */}
                    </div>
                
                    </div>
                </form>
                
            </div>
        );
    }
}

export default LoginTemplate;