import { Outlet } from "react-router-dom";
import {Header} from "../Header/Header";
export function Layout() {
    return(
        <>
            <div className="header-layout">
                <Header/>
            </div>
            <div className="outlet">
            <Outlet />

            </div>
        </>
    )
}