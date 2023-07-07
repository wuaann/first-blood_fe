import React, {CSSProperties, useEffect, useState} from 'react';
import BugTable from "../components/BugTable";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {bugActions, selectBugAll, selectBugLoading} from "../bugSlice";
import {useParams} from "react-router-dom";
import {BugParams} from "models/bugs";
import BugFilter from  '../components/BugFilter'
import {projectActions, selectMember} from "../../project/projectSlice";
import {PropagateLoader } from "react-spinners";


const overrideCSS: CSSProperties ={

    display: "block",
    width: "100%" ,
    margin: "0 auto",
    borderColor: "red",
    position: "absolute",
    // top: "0"
    left:'50%'

}
function Home() {
    const {projectId} = useParams<{ projectId: string }>();
    const bugList = useAppSelector(selectBugAll)
    const Member = useAppSelector(selectMember)
    const dispatch = useAppDispatch();
    const [select,setSelect] = useState<{ }>({
        param:{},
    });
    const loading = useAppSelector(selectBugLoading)

    useEffect(() =>{
            dispatch(bugActions.fetchData({id: projectId}));
            if(projectId){
                dispatch(projectActions.fetchMember(projectId));
            }
    },[dispatch,projectId]);
    const handleSearchChange = (name_like: string)=>{
        dispatch(bugActions.setBugFilterWithDebouce({id:projectId,param:{
            name_like:name_like,
            }}))
    }

    const handleSelectAssignee = (assignee?: string | unknown,reporter?: string|unknown) => {
       if(reporter){
           setSelect((prevState) =>({
               ...prevState,
               reporter: reporter,
           }) )
       }
       if(assignee){
           setSelect((prevState) =>({
               ...prevState,
               assigned: assignee,
           })
           )
       }
    };
    useEffect(() => {
        if (select && Object.keys(select).length > 0  ) {
            dispatch(bugActions.setFilter({id:projectId, param:select}))
        }
    }, [select, dispatch, projectId]);

    const handleOnClick= (name:string)=>{
        dispatch(bugActions.setFilter({id:projectId, param:{status:name}}))
    }
    return (
        <div>
            <BugFilter memberList={Member} project_name={bugList[0]?.project_name} onChange={handleOnClick} onSelectAssignee={handleSelectAssignee} onSearchChange={handleSearchChange} />
            <PropagateLoader color={"hsla(243, 67%, 53%, 1)"} loading={loading} cssOverride={overrideCSS}  />
            <BugTable  bugs={bugList}/>
        </div>
    );
}

export default Home;