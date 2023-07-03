
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <div className="header">
                <div className="nameproject">FIB</div>
                <div className="titleproject">Project
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="titleprojects">Project
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <button onClick={() =>{handlelogout()}} className="create">Logout</button>
                <div className="function">
                    {/* <div className="iconsitting"><i className="fa fa-gear" ></i></div>
                    <div className="iconavatar"><i className="fa-solid fa-circle-user"></i></div> */}
                    <span><FontAwesomeIcon className='icon1' icon={faCircleUser} /></span>
                    <span>
                    <FontAwesomeIcon className='icon2' icon={faGear} />
                    </span>
                </div>
            </div>
        </>
    )
}