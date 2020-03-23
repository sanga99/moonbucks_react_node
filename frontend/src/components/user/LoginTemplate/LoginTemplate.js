import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.scss';

const cx = classNames.bind(styles);

class LoginTemplate extends Component {

    
    render() {
        return (
            <div className={cx('entire')}>
                <div className={cx('login-template')}>
                    <form action="/api/login" method="post">
                    <div className={cx('header')}>
                        <h2>Login</h2>
                        <div className="button-group">
                                <input className={cx('log')} type="submit" value="Login" />
                                <Link className={cx('register')} to="/register">Register</Link>
                        </div>
                    </div>
                    <div className={cx('err')}>{this.props.error}</div> 
                    <div className={cx('content')}>
                        <div className="form-group">
                            <label>ID</label>
                            <input type="text"
                                    className="form-control"
                                    name="userId"
                                    placeholder=" test@google.com 입니다. "
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" 
                                    className="form-control"
                                    name="password"
                                    placeholder=" test01# 입니다. "
                            />
                        </div>
                    </div>
                    </form>
                </div>
                <div className={cx('description')}>
                    <h4> 본 프로젝트는 <sapn>[본점] / [각 매장지점장]</sapn>계정으로 각기 로그인합니다.</h4>
                    <div>
                        <div>test하실 수 있는 계정 </div>
                        <div>Actor1. [본점]:  <span>admin / admin123!</span> </div>
                        <div>Actor2. [종각점 지점장]: <span>test@google.com / test123!</span> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginTemplate;