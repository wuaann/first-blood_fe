import React, {useState} from 'react';
import {Project} from "../../../models";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight,} from "@fortawesome/free-solid-svg-icons";
import {useAppSelector} from "../../../app/hooks";
import {selectCurrentUser} from "../../auth/authSlice";
import {Link} from "react-router-dom";

export interface ProjectTableProps {
    projectList: Project[];
    onEdit?: (project: Project) => void;
    onRemove?: (project: Project) => void;

}

const ProjectTable = ({projectList, onEdit , onRemove}: ProjectTableProps) => {


    const curent_user = useAppSelector(selectCurrentUser);
    const [currentPage, setCurrentPage] = useState(1);
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    projectList.map((item,idx) => {
        console.log('tiem',item)
    });
    const handleNextPage = () => {
        // Assume you have a list of projects and each page displays 10 projects
        const totalProjects = 100; // Replace with the actual total number of projects
        const totalPages = Math.ceil(totalProjects / 10);

        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    return (
        <>
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
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {projectList.map((item, idx) => (
                    <tr className="project-row" key={item.id}>
                        <td>{item.project_name}</td>
                        <td>{item.create_by_email}</td>
                        <td>{item.description}</td>
                        <td>
                            <div className="action-buttons">
                                <button className="edit-button">Edit</button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="pagination">
                <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevPage} />
                <span className="pagination-number">{currentPage}</span>
                <FontAwesomeIcon icon={faChevronRight} onClick={handleNextPage} />
            </div>
        </>
    );
};

export default ProjectTable;