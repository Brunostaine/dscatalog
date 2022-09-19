import jwtDecode from 'jwt-decode';
import { getAuthData } from './storage';

export type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN';

export type TokenData = {
    exp: number;
    user_name: string;
    authorities: Role[];
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

// Verifica os roles de usuário
export const hasAnyRoles = (roles: Role[]): boolean => {
    if (roles.length === 0) {
        return true;
    }

    const tokenData = getTokenData();

    if (tokenData !== undefined) {
        for (var i = 0; i < roles.length; i++) {
            if (tokenData.authorities.includes(roles[i])) {
                return true;
            }
        }

        // Função alternativa que gera o mesmo resultado
        // return roles.some(role => tokenData.authorities.includes(role));
    }

    return false;
};
