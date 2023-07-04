import React from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChevronRight,
    faChevronLeft, faGear,
    faCircleUser,
    faAngleDown,
    faPen,
    faTrash} from '@fortawesome/free-solid-svg-icons';
export interface HomeProps {
}

function Admin(props: HomeProps) {
    return (
        <>
           <div className="header">
                <div className="nameproject">FIB</div>
                <div className="titleproject">Project <FontAwesomeIcon icon={faAngleDown} />
                   
                </div>
                <div className="titleprojects">Project <FontAwesomeIcon icon={faAngleDown} />
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
            <hr />
            <div className="project">
                <div>
                    <h1>Projects</h1>
                </div>
                <button className="creactproject">Create Project</button>
            </div>

            <div className="name-lead">
                <div className="name-blood">
                    <h4>Project</h4>
                </div>
                <div className="name-lead">
                    <h4>Username</h4>
                </div>
                <div></div>

            </div>
            <div className="line2"></div>
            <div className="information-firstblood">
                <div className="nameblood">
                    <div className="nameblood-one">
                        <h4>First Blood</h4>
                    </div>
                    <div className="infomation-user">
                        <div className="avatars-useone">
                            <img
                                src="https://afamilycdn.com/150157425591193600/2020/7/22/jo-29-15954061435372014380172.png"
                                width="25px" height="25px" alt=""/>
                        </div>
                        <div className="leads">Dang Minh Quan</div>
                    </div>
                    <div className="infomation-detail-userone">
                    <FontAwesomeIcon icon={faTrash} />
                    <FontAwesomeIcon className='pen' icon={faPen} />
                    </div>
                </div>
                <div className="line1"></div>
              
                


            </div>

            <div className="pagination">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <span className="pagination-number">1</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                   
            </div>
        </>
    );
}

export default Admin;