import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie';

const api: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        let token: string | undefined;

        if(typeof window !== 'undefined'){
            token = Cookies.get('accessToken')
        }

        if(token && config.headers){
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    }, (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
);

api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    }, (error: AxiosError) => {
        if(error.response){
            const {status} = error.response

            if(status === 401 && typeof window !== 'undefined'){
                console.error("Unauthorized! Redirecting to login page.")

                Cookies.remove('accessToken')
                
                window.location.href = '/login'
            }
        }
        return Promise.reject(error)
    }
);

export default api