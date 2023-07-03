

export const TOKEN_KEY: string = "accessToken"

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY)
}
export const setToken = (token:'') => {
    localStorage.setItem(TOKEN_KEY, token)
}

export const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}
