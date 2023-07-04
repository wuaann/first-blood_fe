import {Project} from "../../../models";


export interface ProjectFormProps {
    initialValues?: Project;
    onSubmit: (formValue:Project) => void;
}

export default function ProjectForm ({initialValues, onSubmit}: ProjectFormProps ) {
    return(
        <>

        </>
    )
}