import React, {useEffect, useState} from 'react';
import './App.css';

import {Route, Routes,} from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {Layout} from "./components/common/Layout/Layout";
import Forgot from "./features/auth/pages/Forgot";
import {authActions, selectCurrentUser, selectToken} from "./features/auth/authSlice";
import ProjectFeature from "./features/project";
import Admin from 'features/admin/pages/admin';
import UserAdmin from 'features/admin/pages/UserAdmin';
import ProjectAd from 'features/admin/pages/ProjectAdmin';
import BugAd from 'features/admin/pages/BugsAdmin';


function App() {
    const user =useAppSelector(selectCurrentUser);
    const dispatch = useAppDispatch();

        useEffect(() => {
            if(!user){
            dispatch(authActions.getCurrentUser())
            }
        },[dispatch,user])
    const token = useAppSelector(selectToken);
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
