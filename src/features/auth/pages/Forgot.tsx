import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash, faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {authActions} from "../authSlice";
import {useAppDispatch} from "../../../app/hooks";

function Forgot() {

    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const handleLoginClick = () => {


    }
    return(
        <>
            <div id="wrapper">
                <form id="form-login">
                    <h2>FIB</h2>
                    <h6>Welcome back, you've been missed!</h6>
                    <h1 className="form-heading">Forgot password</h1>
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
                    <div className="form-group"> {/* Add a new class for the enclosing div */}
                        <Link id={'forgot'} to={'/login'}>Login</Link>
                    </div>
                    <p  onClick={handleLoginClick} className="form-submit">Forget Password</p>
                </form>
            </div>
        </>
    )
}

export default Forgot