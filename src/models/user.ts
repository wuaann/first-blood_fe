export interface User{
    
    id?: string | number,
    name: string,
    email: string,

    role: string,
    phone:string,
    address:string,

    created_at?: string,
    update_at?: string,

}
