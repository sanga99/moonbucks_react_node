import React, { Component} from 'react';
// css

class RegisterTemplate extends Component{

    // 이메일 칸을 벗어 날때 사용가능 이메일이지 확인 (기존 있는 아이디 + 이메일 형식)

    render(){
        const { username, storename, email, password, password2, handleSubmit, handleChange} = this.props;
        return(
            <div>
                <h2>Register</h2>
                <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>이름</label>
                        <input type="text" className="form-control name" name="name"
                                value={username} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>매장명</label>
                        <input type="text" className="form-control store-name" name="storename"
                                value={storename} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email(ID)</label>
                        <input type="text" className="form-control email" name="email"
                                value={email} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control password" name="password"
                                value={password} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password확인</label>
                        <input type="text" className="form-control password2" name="password2"
                                 value={password2} onChange={handleChange}
                                 placeholder="비밀번호를 다시 입력해 주세요"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        <button className="btn btn-link">Cancle</button>
                        {/* <Link to="/login" className="btn btn-link">Cancle</Link> */}
                    </div>
                </form>
            </div>

        );
    }
}

export default  RegisterTemplate;