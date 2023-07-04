import React from 'react';
import {Link, useParams} from "react-router-dom";

const CreateProject = () => {
    const {projectId} = useParams<{projectId: string}>();
    const isEdit = Boolean(projectId);
    return (
        <>
            <Link to={'/'}><button>Back to project List</button></Link>
            {
                isEdit ? <>edit page</>:<>add page</>
            }
        </>
    );
};

export default CreateProject;