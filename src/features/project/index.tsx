import {Route, Routes} from "react-router-dom";
import React from "react";
import CreateProject from "./pages/CreateProject";
import HomePage from "./pages/HomePage";
import BugFeature from "../bug";
import {CreateBug} from "../bug/pages/CreateBug";
import '../bug/components/buglist.css'
import Home from "../bug/pages/Home";
import AddBug from "../bug/components/AddBug";
import BugDetail from "../bug/components/BugDetail";

export default function ProjectFeature() {

    return (

        <Routes>
            <Route index path={''} element={<HomePage/>}/>
                <Route path={'/project/add'} element={<CreateProject/>}/>
                <Route path={'/project/:projectId'} element={<CreateProject/>}>
            </Route>
            <Route path={'/project/:projectId/bug'} element={<BugFeature/>}>
                <Route index element={<Home />}/>
                <Route path='done' element={<CreateBug/>}/>
                <Route path='add' element={<AddBug/>}/>

            </Route>
        </Routes>)
}