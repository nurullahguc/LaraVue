export interface User {
    id: number,
    name: string,
    email: string
}

export interface Credentials {
    email: string
    password: string
    remember_me: boolean
}
