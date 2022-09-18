import { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import qs from "qs"
import jwtDecode from 'jwt-decode';

export type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN';

export type TokenData = {
    exp: number;
    user_name: string;
    authorities: Role[];
};

export type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
};

export const tokenKey = 'authData';

export const BASE_URL =
    process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';

type LoginData = {
    username: string;
    password: string;
};

export const requestBackendLogin = (loginData: LoginData) => {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
    };

    const data = qs.stringify({
        ...loginData,
        grant_type: 'password',
    });

    return axios({
        method: 'POST',
        baseURL: BASE_URL,
        url: '/oauth/token',
        data,
        headers,
    });
};

export const requestBackend = (config: AxiosRequestConfig) => {
    const headers = config.withCredentials
        ? {
            ...config.headers,
            Authorization: 'Bearer ' + getAuthData().access_token,
        }
        : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers });
};

// Salva token no localstorage
export const saveAuthData = (obj: LoginResponse) => {
    localStorage.setItem(tokenKey, JSON.stringify(obj));
};

// Busca token no localstorage
export const getAuthData = () => {
    const str = localStorage.getItem(tokenKey) ?? '{}';
    return JSON.parse(str) as LoginResponse;
};


// decodifica o token e busca informações do usuário
export const getTokenData = (): TokenData | undefined => {
    try {
        return jwtDecode(getAuthData().access_token) as TokenData;
    } catch (error) {
        return undefined;
    }
}

// Verifica se o usuario está autenticado e se o token é válido
export const isAuthenticated = (): boolean => {
    const tokenData = getTokenData();

    return (tokenData && tokenData.exp * 1000 > Date.now()) ? true : false;
}