import React, { Component } from 'react';
// import Button from '../../common/Button'

class LoginTemplate extends Component {

    
    
    render() {
        const { userId, password, handleSubmit, handleChangeId, handleChangePw, handleKeyPress } = this.props;

        return (
            <div className="">
                <h2>Login</h2>
                <form name="form" onSubmit={handleSubmit}>
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
                        <button className="btn-btn-primarty" >Login</button>
                        <button className="btn-btn-link">register</button>
                        {/* <Button type="primary" htmlType="submit" className="btn btn-primary">Login</Button> /> */}
                        {/* <link to="/register" className="btn btn-link">Register</link> */}
                    </div>
                
                    </div>
                </form>
                
            </div>
        );
    }
}

export default LoginTemplate;