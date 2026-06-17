import { LoginRequest, LoginResponse } from "@/types/auth.types";
import api from "./api";
import Cookies from 'js-cookie';

export const authService = {
    login: async (req: LoginRequest): Promise<LoginResponse> => {
        const res = await api.post<LoginResponse>('/api/auth/login', req)

        Cookies.set('accessToken', res.data.accessToken, {
            expires: 7,
            secure: true,
            sameSite: 'Strict'
        })

        return res.data
    },  


};