import React, { Component} from 'react';
// css

class RegisterTemplate extends Component{


  

    

    render(){
        const { username, storename, email, password, password2,  phone, address, storePhone,  handleSubmit,
             handleChangeStore, handleChangeOwner, handleChangeId, handleChangePw , handleChangePw2, handleChangeOwnerPhone
            } = this.props;
           
            
        return(
            <div>
                <h2>Register</h2>
                <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>매장명</label>
                        {/* <input type="text" className="form-control store-name" name="storename"
                                value={storename} onChange={handleChangeStore}/> */}
                          <select>
                                { 
                                 this.props.storeOption.map((store) => 
                                      <option key={store.storeId}>{store.name}</option>
                                )}
                            </select>
                    </div>
                     {/* 매장명을 select하면 -> 매장 주소, 매장 번호가 뜬다.   */}
                    {/* <div className="form-group">
                        <label>매장 주소</label>
                        <input type="text" className="form-control name" name="name"
                                value={address} />
                    </div> 
                     <div className="form-group">
                        <label>매장 전화번호</label>
                        <input type="text" className="form-control storephone" name="storephone"
                                value={storephone} />
                    </div> */} 
                    <div className="form-group">
                        <label>대표자명</label>
                        <input type="text" className="form-control name" name="name"
                                value={username} onChange={handleChangeOwner}/>
                    </div>
                    <div className="form-group">
                        <label>Email(ID)</label>
                        <input type="text" className="form-control email" name="email"
                                value={email} onChange={handleChangeId}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control password" name="password"
                                value={password} onChange={handleChangePw}/>
                    </div>
                    <div className="form-group">
                        <label>Password확인</label>
                        <input type="text" className="form-control password2" name="password2"
                                 value={password2} onChange={handleChangePw2}
                                 placeholder="비밀번호를 다시 입력해 주세요"/>
                    </div>
                    <div className="form-group">
                        <label>대표자 전화번호</label>
                        <input type="text" className="form-control phone" name="phone"
                                value={phone} onChange={handleChangeOwnerPhone}/>
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