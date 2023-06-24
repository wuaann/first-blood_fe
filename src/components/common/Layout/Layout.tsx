import { Outlet, Link } from "react-router-dom";
import {Header} from "../Header/Header";
export function Layout() {
    return(
        <>
            <Header/>
            <Outlet />
        </>
    )
}