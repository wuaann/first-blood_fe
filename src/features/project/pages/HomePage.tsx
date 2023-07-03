import React, {useEffect} from 'react';
import './home.css';
import ProjectTable from "../components/ProjectTable";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {projectActions, selectProjectByUser} from "../projectSlice";


function HomePage() {
    const projesctList = useAppSelector(selectProjectByUser)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(projectActions.fetchProjectList())
    },[dispatch]);
    console.log('data' ,projesctList);
    return (
        <>
            <ProjectTable projectList={projesctList}/>
        </>
    );
}

export default HomePage;
