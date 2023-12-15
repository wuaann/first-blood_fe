import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
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
import CreateUser from 'features/admin/pages/createUsers';



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
                            <Route path="/createuser" element={<CreateUser/>}/>




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
