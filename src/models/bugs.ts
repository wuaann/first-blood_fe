export interface Bug {
    id?: number | string,
    project_name: string,
    category_name: string,
    status_name: string,
    priority_name: string,
    title: string,
    description: string,
    assignee_name: string,
    reporter_name: string,
    created_at?: string,
    update_at?: string,
}

export interface BugByProject {
    id?: number | string,
    project_id: 8
    project_name: string,
    category_id: number | string,
    category_name: string,
    status_id: number | string,
    status_name: string,
    priority_id: number | string,
    priority_name: string,
    reporter_by: number | string,
    reporter_email: string,
    assigned_to: number | string,
    assigned_email: string
}

export interface BugParams {
    id?: string,
    param?: {
        name_like?:string,
        assigned?:string,
        reporter?:string
        status?:string

    }
}