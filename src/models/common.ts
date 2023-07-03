export interface ListResponse<T> {
    code: number,
    message: string,
    data: T[]
}

export interface TokenResponse {
    accessToken: string
}

