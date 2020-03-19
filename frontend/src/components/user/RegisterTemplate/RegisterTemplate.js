import React, { Component} from 'react';
import { Link } from 'react-router-dom';
// css

class RegisterTemplate extends Component{


  

    

    render(){
        const { username,  email, password, password2,  phone,  selectedValue, selectedStore,
                 CheckEmail, ClickIsExistEmail, CheckPw, CheckPw2, CheckPhone, handleSubmit,
                 handleChangeStore, handleChangeOwner, handleChangeId, handleChangePw , handleChangePw2, handleChangeOwnerPhone
            } = this.props;

            
            
        return(
            <div>
                <h2>Register</h2>
                <form name="form" >
                    <div className="form-group">
                        <span className="required">*</span>
                        <label>매장명</label>
                          <select value={selectedValue} onChange={handleChangeStore}>
                              <option disabled="disabled" value='default'>매장선택</option>
                                { 
                                 this.props.storeOption.map((store) => 
                                      <option key={store.storeId}>{store.name}</option>
                                )}
                            </select>
                    </div>
                    <div>*매장당 한명의 owner만 가입할 수 있습니다.
                          (즉, owner가 지정되지 않은 매장들만 목록으로 나타납니다.)
                    </div>
                    selct만 오른쪽정렬
                     {/* 매장명을 select하면 -> 매장 주소, 매장 번호가 뜬다.   */}
                   <div className="form-group">
                        <label>매장 주소</label>
                        <div className="form-control name" name="name">
                                {selectedStore.address ? JSON.stringify(selectedStore.address) : ''}
                        </div>
                    </div> 
                     <div className="form-group">
                        <label>매장 전화번호</label>
                        <div className="form-control storephone" name="storephone">
                                {selectedStore.phone ? JSON.stringify(selectedStore.phone) : ''} 
                        </div>
                    </div> 
                    {/*  참고, 주의) input text에 입력을 못하게 하는 방법 [readOnly / disabled]가 있다.
                        disabled 는 폼으로 값이 전송이 안된다. 폼으로 데이터를 전송하고 싶으면 반드시 readonly 를 써야한다 
                    */}
                    <div className="form-group">
                         <span className="required">*</span>
                        <label>대표자명</label>
                        <input type="text" className="form-control name" name="name"
                                value={username} required onChange={handleChangeOwner}/>
                    </div>
                    <div className="form-group">
                        <span className="required">*</span>
                        <label>Email(ID)</label>
                        <input type="text" className="form-control email" name="email"
                                value={email} required onChange={handleChangeId} onBlur={CheckEmail}/>
                    </div>
                    <div className="form-group">
                        <span className="required">*</span>
                        <label>Password</label>
                        <input type="text" className="form-control password" name="password"
                                value={password} required  onChange={handleChangePw} onBlur={CheckPw}
                                placeholder="특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내"
                                />
                    </div>
                    <div className="form-group">
                        <span className="required">*</span>
                        <label>Password확인</label>
                        <input type="text" className="form-control password2" name="password2"
                                 value={password2} required onChange={handleChangePw2} onBlur={CheckPw2}
                                 placeholder="비밀번호를 다시 입력해 주세요"/>
                    </div>
                    <div className="form-group">
                        <label>대표자 전화번호</label>
                        <input type="text" className="form-control phone" name="phone"
                                value={phone} onChange={handleChangeOwnerPhone} onBlur={CheckPhone}
                                placeholder="010-xxxx-xxxx"
                                />
                    </div>
                    <div className="form-group">
                        <button  onClick={handleSubmit} className="btn btn-primary">Register</button>
                        {/* <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">Register</button> */}
                        {/* <button className="btn btn-link">Cancle</button> */}
                        <Link to="/adminHome" className="btn btn-link">Cancle</Link>
                    </div>
                </form>
            </div>

        );
    }
}





export default  RegisterTemplate;