import './sidebar.css'
import {faBug, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

interface sideBarProps {
    projectId?: string;

}
export function SideBar({projectId} : sideBarProps) {
    const [activeButton, setActiveButton] = useState('button1');

    const handleButtonClick = (buttonId:string) => {
        setActiveButton(buttonId);
    };
    return (
        <div className="side-bar" style={{marginTop:'56px'}}>
            <div className="side-bar-wrap">
                <div className="side-bar-title">
                    {/* <div>Bug Menu</div> */}
                </div>
                <div className="side-bar-item">
                    <ul className="side-bar-item-list">
                     <Link  to={`/`}>
                         <li className="side-bar-icon">
                             <div className="item-info">
                                 <div className="item-icon"><FontAwesomeIcon icon={faBriefcase} /> </div>
                                 <div className="item-name">Project</div>
                             </div>
                         </li>
                     </Link>
                     <Link  to={`/project/${projectId}/bug`}
                            onClick={() => handleButtonClick('button1')} style={{marginTop:'100px'}}>
                         <li className="side-bar-icon">
                             <div  className={activeButton === 'button1' ? 'active item-info'  : 'item-info'} >
                                 <div className="item-icon"><FontAwesomeIcon icon={faBug} /></div>
                                 <div className="item-name" >Bug</div>
                             </div>
                         </li>
                     </Link>
                     <Link  to={`/project/${projectId}/bug`}
                            onClick={() => handleButtonClick('button2')}>
                         <li className="side-bar-icon">
                             <div  className={activeButton === 'button2' ? 'active item-info'  : 'item-info'} >
                                 <div className="item-icon"><FontAwesomeIcon icon={faBug} /></div>
                                 <div className="item-name" >Bug</div>
                             </div>
                         </li>
                     </Link>
                    </ul>
                </div>
            </div>
        </div>

    );
}