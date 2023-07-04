import React, {useEffect, useState} from 'react';
import './App.css';

import {Route, Routes,} from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import {useAppSelector} from "./app/hooks";
import {Layout} from "./components/common/Layout/Layout";
import Forgot from "./features/auth/pages/Forgot";
import {authActions, selectToken} from "./features/auth/authSlice";
import {useDispatch} from "react-redux";
import ProjectFeature from "./features/project";
import Admin from 'features/admin/pages/admin';
import UserAdmin from 'features/admin/pages/UserAdmin';
import ProjectAd from 'features/admin/pages/ProjectAdmin';
import BugAd from 'features/admin/pages/BugsAdmin';


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authActions.getCurrentUser())
    },[dispatch])
    const token =useAppSelector(selectToken);
    const user =useAppSelector(selectToken);
    return (
        <>
            <Routes>
                {
                    token
                        ?
                        <>
                            <Route path={'/'} element={<Layout/>}>
                                <Route index element={<ProjectFeature/>}/>
                                <Route path="*" element={<ProjectFeature/>}/>
                            </Route>
                            <Route path="/admin" element={<Admin/>}/>
                            <Route path="/useradmin" element={<UserAdmin/>}/>
                            <Route path="/projectadmin" element={<ProjectAd/>}/>
                            <Route path="/bugadmin" element={<BugAd/>}/>


                        </>

                        :
                       <>
                           <Route path={"/login"} element={<LoginPage/>}/>
                           <Route path={"/forgot-password"} element={<Forgot/>}/>
                           <Route path={"*"} element={<LoginPage/>}/>
                       </>
            }
            </Routes>
        </>
    );
}

export default App;
