import {Route, Routes} from "react-router-dom";
import React from "react";
import CreateProject from "./pages/CreateProject";
import HomePage from "./pages/HomePage";

export default function ProjectFeature(){

    return(

        // <><div>quan</div></>
        <Routes>
            {/*<Route path={'/project'} element={<Layout/>}>*/}
                <Route index element={<HomePage/>}/>
                <Route path={'/project/add'} element={<CreateProject/>}/>
                <Route path={'/project/:projectID'} element={<CreateProject/>}/>
             {/*</Route>*/}
        </Routes>
    )
}