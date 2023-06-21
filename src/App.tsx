import React, {useState} from 'react';
import './App.css';

import {Route, Routes,} from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import {NotFound} from "./components/common";
import Home from "./features/bug/pages/home";

function App() {
    const [user,setUser] = useState(false);

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
                           <Route path={"*"} element={<NotFound/>}/>
                       </>
            }
            </Routes>
        </>
    );
}

export default App;
