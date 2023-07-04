import React, {useEffect, useState} from 'react';
import {Project, User} from "../../../models";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {useAppSelector} from "../../../app/hooks";
import {selectCurrentUser} from "../../auth/authSlice";
import {Link} from "react-router-dom";

export interface ProjectTableProps {
    projectList: Project[];
    onEdit?: (project: Project) => void;
    onRemove?: (project: Project) => void;
    onNavigate?: (project: Project) => void;

}

const ProjectTable = ({projectList, onEdit, onRemove, onNavigate}: ProjectTableProps) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const currentUser = useAppSelector(selectCurrentUser);
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const checkIsAdmin = (currentUser: User) => {
            if (currentUser?.role === 2) {
                setIsAdmin(true)
            }
        }
        checkIsAdmin(currentUser);
    }, [currentUser])
    console.log(isAdmin, currentUser)


    return (<>
            <div className="project">
                <div>
                    <h1>Projects</h1>
                </div>
                <Link to={'project/add'}>
                    <button className="creactproject">Create Project</button>
                </Link>
            </div>

            <table className="project-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Lead</th>
                    <th>Description</th>
                    {isAdmin && <th></th>}
                </tr>

                </thead>
                <tbody>
                {projectList.map((item, idx) => (<tr className="project-row" key={item.id} onClick={() => {
                        onNavigate?.(item)
                    }}>
                        <td>{item.project_name}</td>
                        <td>{item.create_by_email}</td>
                        <td>{item.description}</td>
                        {isAdmin && (<td className="ellipsis-cell">
                                <div className="ellipsis-wrapper">
                                    <FontAwesomeIcon
                                        icon={faEllipsis}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsDropdownOpen(!isDropdownOpen);
                                        }}
                                    />
                                    {isDropdownOpen && (<div className="dropdown-menu">
                                            <button onClick={(e) => {
                                                e.stopPropagation()
                                                onEdit?.(item)
                                            }}>Edit
                                            </button>
                                            <button onClick={() => onRemove?.(item)}>Remove</button>
                                        </div>)}
                                </div>
                            </td>)}
                    </tr>))}
                </tbody>
            </table>

        </>);
};

export default ProjectTable;