import React, {useState} from 'react';
import './App.css';

import {Route, Routes,} from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import {NotFound} from "./components/common";
import Home from "./features/bug/pages/home";
import {useAppSelector} from "./app/hooks";
import {selectCurrentUser} from "./features/auth/authSlice";

function App() {
 const user = useAppSelector(selectCurrentUser);
    return (
        <>
            <Routes>
                {
                    user
                        ?
                        <>

                            <Route path={'/'} element={<Home/>}/>
                            <Route path="*" element={<Home/>}/>
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
