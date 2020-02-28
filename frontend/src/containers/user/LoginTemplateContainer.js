import React, { Component} from 'react';
import { connect } from 'react-redux';
import  { loginRequestAction }  from '../../actions/user.action';
import LoginTemplate from '../../components/user/LoginTemplate';
// import React, {useState, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
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
    handleChangeId = (e) => {
        this.setState({
           userId:  e.target.value,
        });
    }

    handleChangePw = (e) => {
        this.setState({
            password : e.target.value,
        });
        // console.log('handlePw 는'+ this.state.password);
    }

    handleKeyPress = (e) => {
       if(e.key === 'Enter'){
           this.props.handleSubmit();
        }
    }
    
    // handleSubmit = (e) => {
    //     e.preventDefualt();
    // }
    
  
        // const { user, error, loginSuccess, loginFailure} = this.props;
        //  const {loginRquest } = this.state;
        // const { userId, password,  handleChange, handleKeyPress} = this;
        // action 데이터

    render() {
        return (
            <LoginTemplate 
            userId={this.state.userId}              // 입력하는 id
            password={this.state.password}           // 입력하는 pw
            handleSubmit={this.props.handleSubmit}
            handleChangeId={this.handleChangeId}          // 단순 input text입력
            handleChangePw={this.handleChangePw}          // 단순 input text입력
            handleKeyPress={this.handleKeyPress}    // Enter 시 submit
            isLoggingIn={this.props.isLoggingIn}
        /> 
        );
    }
}

    // getStoreState() => props형태로 사용
    const mapStateToProps = (state) => {    // store의 state(=reducers)값
        return {
            isLoggingIn: state.userReducer.isLoggingIn
            };
        };
        
    // 액션상태를 바꿔준다.(액션 객체는 함수를 반환)
    const mapDispatchToProps = (dispatch) => {  
        return {
            handleSubmit : (userId,password) => dispatch(loginRequestAction(userId,password)),
        };
    };


    LoginTemplateContainer = connect(mapStateToProps, mapDispatchToProps)(LoginTemplateContainer);
    // connect는 react-redux의 내장 aip로, component를 redux Store에 '연결'해준다.


    export default LoginTemplateContainer;

  /*  
 // hook사용 ( (주의) hook은 class형에서 사용할 수 없다. )
    // jsx에서 value값과 handle e.target.value를 가져온다.
    export const useInput = (initValue = null)=> {
        const [value, setter] = useState(initValue);
        const handler = useCallback((e) => {
            setter(e.target.value);
        }, []);
        return [value, handler];
    }

    const LoginForm = () => {
         // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook이다.
        const dispatch  = useDispatch();
        // 각 액션들을 디스패치하는 함수들을 만든다. useSelector는 mapStatToProps와 비슷하다.
        const { isLoggingIn } = useSelector(state => state.user);

        const [userId, handleChangeId ] = useInput('');
        const [password, handleChangePw] = useInput('');
          // useSelector는 리덕스 스토어의 상태를 조회하는 Hook이다.
         // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물(reducers)과 동일하다.
        const handleSubmitForm = useCallback((e) => {
            e.preventDefault();
            dispatch(loginRequestAction({
                userId,
                password,
            }));
        }, [userId, password]);
    }
    export default LoginForm;
*/