import React, {useEffect} from 'react';
import './home.css';
import ProjectTable from "../components/ProjectTable";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {projectActions, selectLoading, selectProjectByUser} from "../projectSlice";
import { BarLoader } from 'react-spinners';
import { CSSProperties } from "react";
import {Project} from "../../../models";
import { useNavigate } from "react-router-dom";


const overrideCSS: CSSProperties ={

    display: "block",
    width: "100%" ,
    margin: "0 auto",
    borderColor: "red",
    color: 'rgba(54, 147, 214, 1)',
    position: "absolute",
    // top: "0"

}

function HomePage() {
    const projectList = useAppSelector(selectProjectByUser)
    const dispatch = useAppDispatch()
    const loading = useAppSelector(selectLoading)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(projectActions.fetchProjectList())
    },[dispatch]);

    const handleNavigate = (project: Project) => {
        navigate(`project/${project.id}/bug`)
    }
    const handleEditProject = async (project:Project) => {
      navigate(`project/${project.id}`)
    }
    return (
        <>
            <BarLoader loading={loading} cssOverride={overrideCSS}  />
            <ProjectTable projectList={projectList} onNavigate={handleNavigate} onEdit={handleEditProject}/>
        </>
    );
}

export default HomePage;
