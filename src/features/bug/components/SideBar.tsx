import './sidebar.css'
import {faBug} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link, useLocation} from "react-router-dom";


interface sideBarProps {
    projectId?: string;

}
export function SideBar({projectId} : sideBarProps) {
    const route = useLocation();
    return (
        <div className="side-bar">
            <div className="side-bar-wrap">
                <div className="side-bar-title">
                    <div>Bug Menu</div>
                </div>
                <div className="side-bar-item">
                    <ul className="side-bar-item-list">
                     <Link  to={`${route.pathname}`}>
                         <li className="side-bar-icoon">
                             <div className="item-info">
                                 <div className="item-icon"><FontAwesomeIcon icon={faBug} /></div>
                                 <div className="item-name">Bug</div>
                             </div>
                         </li>
                     </Link>
                     <Link  to={`/project/${projectId}/bug/done`}>
                         <li className="side-bar-icoon">
                             <div className="item-info">
                                 <div className="item-icon"><FontAwesomeIcon icon={faBug} /></div>
                                 <div className="item-name">Bug</div>
                             </div>
                         </li>
                     </Link>

                    </ul>
                </div>
            </div>
        </div>

    );
}