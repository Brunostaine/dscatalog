const tokenKey = 'authData';

export type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
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

// Remove o token do localstorage
export const removeAuthData = () => {
    localStorage.removeItem(tokenKey);
};