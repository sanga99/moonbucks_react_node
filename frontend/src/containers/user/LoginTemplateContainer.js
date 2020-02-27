import React, { Component} from 'react'
import LoginTemplate from '../../components/user/LoginTemplate';
import { connect } from 'react-redux';
import  { loginRequestAction }  from '../../actions/user.action';
// import { bidnActionCreators } from 'redux';


class LoginTemplateContainer extends Component {
    
    constructor(props){
        super(props);

        this.state ={
            userId : '',    // 입력하는 id
            password : '',  // 입력하는 pw
        }     
    }


    // arror function으로 작성하면 bind(this)를 하지 않아도 된다.
    handleSubmit = (e) => {
        e.preventDefualt();
        console.log('dispatch의 loginRquest는'+this.props.loginRquest());
        console.log('dispatch의 22_loginRquest는'+loginRquest());
        loginRquest();
        // console.log(this.props.loginSuccess(error));
        // 입력된 id,pw 와
        // store에서 가져온 id, pw를 가져와서 비교
        // 같으면 login success (dispatch)
        //      this.props.loginSuccess();
        // 다르면 login failure (dispatch)
        //      this.props.failure();

    }
    
    handleChangeId = (e) => {
        this.setState({
           userId:  e.target.value,
        });
    }

    hadleChangePw = (e) => {
        this.setState({
            password : e.target.value,
        });
        // console.log('handlePw 는'+ this.state.password);
    }

    handleKeyPress = (e) => {
       if(e.key === 'Enter'){
           this.handleSubmit();
        }
    }

    render() {
        const { user, error, loginSuccess, loginFailure} = this.props;
         const {loginRquest } = this;
        // const { userId, password,  handleChange, handleKeyPress} = this;
        // action 데이터
        
    

        return (
            <LoginTemplate 
                username={this.state.userId}              // 입력하는 id
                password={this.state.password}           // 입력하는 pw
                handleSubmit={this.handleSubmit}
                handleChangeId={this.hadleChangeId}          // 단순 input text입력
                handleChangePw={this.hadleChangePw}          // 단순 input text입력
                handleKeyPress={this.handleKeyPress}    // Enter 시 submit
            /> 
        );
    }
}

// getStoreState() => props형태로 사용
const mapStateToProps = (state) => {    // db에 있는 user(id, pw)
    console.log('여긴 mapStateToProps state'+ state); // object
    console.log('여긴 mapStateToProps state.user'+ state.user); 
    return {
        user: state.user    // undefinded
    };
};

// 액션상태를 바꿔준다.(액션 객체는 함수를 반환)
const mapDispatchToProps = (dispatch) => {  
    
    // console.log('dispatch user는'+ user +'에러는'+error);
    return {
        loginRquest : (id,pw) => dispatch(loginRequestAction(id.pw)),
    };
};


LoginTemplateContainer = connect(mapStateToProps, mapDispatchToProps)(LoginTemplateContainer);
// connect는 react-redux의 내장 aip로, component를 redux Store에 '연결'해준다.

export default LoginTemplateContainer;