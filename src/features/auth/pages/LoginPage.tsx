import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faLock, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {authActions, selectLogging} from "../authSlice";
import './login.css'
import {Link, useNavigate} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export interface LoginPageProps {
}

function LoginPage(props: LoginPageProps) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const logging = useAppSelector(selectLogging);
    const handleLoginClick = () => {

        dispatch(authActions.login({
            email: email,
            password: password
        }));

        navigate('/')

    }
    return (
        <div id="wrapper">
            <form id="form-login">
                <h2>FIB</h2>
                <h6>Welcome back, you've been missed!</h6>
                <h1 className="form-heading">Sign In</h1>
                <div className="form-group">
                    <div className="input-icon">
                        <FontAwesomeIcon icon={faUser} className="fa-icon"/>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-icon">
                        <FontAwesomeIcon icon={faLock} className="fa-icon"/>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            className="form-input password-input"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div id="eye" onClick={togglePasswordVisibility}>
                            <FontAwesomeIcon
                                icon={passwordVisible ? faEye : faEyeSlash}
                                className="far fa-eye"
                            />
                        </div>
                    </div>

                </div>
                <div className="form-group"> {/* Add a new class for the enclosing div */}
                    <span><input type="checkbox" value="Remember me"/>Remember me</span>
                    <Link id={'forgot'} to={'/forgot-password'}>Forgot password? </Link>
                </div>

                <p  onClick={handleLoginClick} className="form-submit">  <ClipLoader
                    loading={logging}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />Sign In</p>
            </form>
        </div>
    );
}

export default LoginPage;