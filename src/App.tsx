import React, {useEffect, useState} from 'react';
import './App.css';

import {Route, Routes,} from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import {useAppSelector} from "./app/hooks";
import {Layout} from "./components/common/Layout/Layout";
import Forgot from "./features/auth/pages/Forgot";
import {authActions, selectCurrentUser, selectToken} from "./features/auth/authSlice";
import BugFeature from "./features/project";
import {useDispatch} from "react-redux";



function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authActions.getCurrentUser())
    },[dispatch])
    const token =useAppSelector(selectToken);
    return (
        <>
            <Routes>
                {
                    token
                        ?
                        <>
                            <Route path={'/'} element={<Layout/>}>
                                <Route index element={<BugFeature/>}/>
                                <Route path="*" element={<BugFeature/>}/>
                            </Route>
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
