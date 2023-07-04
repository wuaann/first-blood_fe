import {Route, Routes} from "react-router-dom";
import React from "react";
import CreateProject from "./pages/CreateProject";
import HomePage from "./pages/HomePage";
import BugFeature from "../bug";

export default function ProjectFeature() {

    return (

        <Routes>
            <Route index path={'/'} element={<HomePage/>}/>
            <Route path={'/project/add'} element={<CreateProject/>}/>
            <Route path={'/project/:projectId'} element={<CreateProject/>}/>
            <Route path={'/project/:projectId/bug'} element={<BugFeature/>}/>
        </Routes>)
}