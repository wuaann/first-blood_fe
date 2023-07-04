import './header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGear, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {useAppDispatch} from "../../../app/hooks";
import {authActions} from "../../../features/auth/authSlice";

export function Header() {
    const dispatch = useAppDispatch()
    const handlelogout = () => {
        dispatch(authActions.logout())
    }
    return (
        <>
            <div className={'header-background'}>
            <div className="header">
                <div className={'nav-bar'}>
                    <div className="nameproject">FIB</div>
                    <div className="titleprojects">Project
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>

                <div className="function">
                    <button onClick={() => {
                        handlelogout()
                    }} className="logout">Logout
                    </button>
                    <span><FontAwesomeIcon className='icon1' icon={faCircleUser}/></span>
                    <span><FontAwesomeIcon className='icon2' icon={faGear}/></span>
                </div>
            </div>
            </div>
        </>
    )
}