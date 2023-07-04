export interface Project{
        id: string | number,
        project_name: string,
        description: string,
        create_by_email: string,
        quantity:number,
        create_at: Date,
        update_at?: Date,
}
export interface ProjectAdmin{
        id: string | number,
        project_name: string,
        description: string,
        create_by: string,
        participants:number,
        create_at: Date,
        update_at?: Date,
}
