export interface User{
    
    id?: string | number,
    name: string,
    email: string,

    role: number,
    phone:string,
    address:string,

    created_at?: string,
    update_at?: string,

}

export interface CreateUser {
    email: string;
    password: string;
    role: number;
  }
