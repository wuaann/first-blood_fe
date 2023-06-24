import React, {useState} from 'react';
import './App.css';

import {Route, Routes,} from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import Home from "./features/bug/pages/home";
import {useAppSelector} from "./app/hooks";
import {selectCurrentUser} from "./features/auth/authSlice";
import {Header} from "./components/common/Header/Header";
import {Layout} from "./components/common/Layout/Layout";

function App() {
 let user;
    user =useAppSelector(selectCurrentUser);
    if (!user){
        user = localStorage.getItem('accessToken');
    }
    return (
        <>
            <Routes>
                {
                    user
                        ?
                        <>
                            <Route path={'/'} element={<Layout/>}>
                                <Route index element={<Home/>}/>
                                <Route path="*" element={<Home/>}/>
                            </Route>
                        </>

                        :
                       <>
                           <Route path={"/login"} element={<LoginPage/>}/>
                           <Route path={"*"} element={<LoginPage/>}/>
                       </>
            }
            </Routes>
        </>
    );
}

export default App;
