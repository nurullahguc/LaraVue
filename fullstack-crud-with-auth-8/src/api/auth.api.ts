import {apiClient} from "@/common/http-common";
import {Credentials} from "@/models/auth.model";

export default class AuthService {

    async login(credentials: Credentials): Promise<any> {
        return await apiClient.post('/login', credentials)
    }

    async getToken(): Promise<any> {
        return await apiClient.get('/sanctum/csrf-cookie')
    }

    async getUser(): Promise<any> {
        return await apiClient.get('/api/user')
    }

    async logout(): Promise<any> {
        return await apiClient.post('/logout')
    }
}

export const authService = new AuthService()