import { AxiosError, AxiosResponse } from "axios";

export const errorInterceptor = (error: AxiosError) => {
    if (error.message === 'network Error') {
        return Promise.reject(new Error('Erro de conexão.'));
    }
    if (error.response?.status === 401) {
        // do something
    }
    return Promise.reject(error);
};

export const responseInterceptor = (response: AxiosResponse) => {
return response;
};