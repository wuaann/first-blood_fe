import React from "react";
import {SideBar} from "./components/SideBar";
import {  useParams,  Outlet} from "react-router-dom";



export default function BugFeature() {
    const {projectId} = useParams<{ projectId: string }>();
    return (
        <div className="bug-wrap">
            <div className={'sidebar'}>
                <SideBar projectId={projectId}/>
            </div>
            <div className={'bug-content'}>
               <Outlet/>
            </div>
        </div>

    )
}