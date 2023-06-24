export interface ListResponse<T> {
    data: T[];
}

export interface TokenResponse {
    code: number,
    message: string,
    data: {

        user: [],
        accessToken: string

    }
}

