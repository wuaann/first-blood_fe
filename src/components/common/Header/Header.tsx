
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear, faCircleUser} from '@fortawesome/free-solid-svg-icons';
export function Header() {
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
                <button className="create">Create</button>
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