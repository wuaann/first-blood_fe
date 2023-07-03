import React, {useEffect} from 'react';
import './home.css';
import ProjectTable from "../components/ProjectTable";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {projectActions, selectLoading, selectProjectByUser} from "../projectSlice";
import { BarLoader } from 'react-spinners';
import { useState, CSSProperties } from "react";


const overrideCSS: CSSProperties ={

    display: "block",
    width: "100%" ,
    margin: "0 auto",
    borderColor: "red",
    marginTop: "8px",
    color: 'rgba(54, 147, 214, 1)',
    position: "absolute",
    // top: "0"

}

function HomePage() {
    const projesctList = useAppSelector(selectProjectByUser)
    const dispatch = useAppDispatch()
    const loading = useAppSelector(selectLoading)
    useEffect(() => {
        dispatch(projectActions.fetchProjectList())
    },[dispatch]);
    console.log('data' ,projesctList);
    return (
        <>
            <BarLoader loading={loading} cssOverride={overrideCSS}  />
            <ProjectTable projectList={projesctList}/>
        </>
    );
}

export default HomePage;
