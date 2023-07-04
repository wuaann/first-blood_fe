import {useParams} from "react-router-dom";
import {SideBar} from "../components/SideBar";
import './buglist.css'

export function BugList() {
    const {projectId} = useParams<{ projectId: string }>();
    return (<>
        <div>quam</div>
        </>);
}