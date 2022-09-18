import { Navigate } from "react-router-dom";

import { getAuthData, isAuthenticated } from "./util/requests";

export const PrivateRoutes = ({ children }: any) => {
    const user = getAuthData().access_token;

    return user !== undefined || isAuthenticated() ? children : <Navigate to="/admin/auth/login" />;
};
