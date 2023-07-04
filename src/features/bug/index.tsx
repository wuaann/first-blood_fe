import React from "react";
import {SideBar} from "./components/SideBar";
import {Route, Routes, useParams, useLocation} from "react-router-dom";

import {BugList} from "./pages/BugList";
import {CreateBug} from "./pages/CreateBug";


export default function BugFeature() {
    const {projectId} = useParams<{ projectId: string }>();
    const location = useLocation();
    return (
        <div className="bug-wrap">
            <div className={'sidebar'}>
                <SideBar projectId={projectId}/>
            </div>
            <div className={'bug-content'}>
                <Routes>
                    <Route index  element={<BugList/>}/>
                    <Route path={`/bug`} element={<BugList/>}/>
                    <Route path={`/done`} element={<CreateBug/>}/>
                </Routes>
            </div>
        </div>

    )
}