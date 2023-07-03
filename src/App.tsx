import React from 'react';
import './App.css';

import {Route, Routes,} from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import Home from "./features/bug/pages/home";
import {useAppSelector} from "./app/hooks";
import {selectCurrentUser, selectToken} from "./features/auth/authSlice";
import {Layout} from "./components/common/Layout/Layout";
import Forgot from "./features/auth/pages/Forgot";
import Admin from 'features/admin/pages/admin';

function App() {
 let user;
    user =useAppSelector(selectToken);
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
                            <Route path="/admin" element={<Admin/>}/>
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
