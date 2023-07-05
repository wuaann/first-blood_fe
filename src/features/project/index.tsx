import {Route, Routes} from "react-router-dom";
import React from "react";
import CreateProject from "./pages/CreateProject";
import HomePage from "./pages/HomePage";
import BugFeature from "../bug";
import {BugList} from "../bug/pages/BugList";
import {CreateBug} from "../bug/pages/CreateBug";

export default function ProjectFeature() {

    return (

        <Routes>
            <Route index path={'/'} element={<HomePage/>}/>
            <Route path={'/project/add'} element={<CreateProject/>}/>
            <Route path={'/project/:projectId'} element={<CreateProject/>}>
            </Route>
            <Route path={'/project/:projectId/bug'} element={<BugFeature/>}>
                <Route index element={<BugList/>}/>
                <Route path='done' element={<CreateBug/>}/>
            </Route>
        </Routes>)
}