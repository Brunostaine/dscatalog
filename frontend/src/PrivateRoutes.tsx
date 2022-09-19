import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./util/auth";
import { getAuthData } from "./util/storage";



export const PrivateRoutes = ({ children }: any) => {
    const user = getAuthData().access_token;

    return user !== undefined || isAuthenticated() ? children : <Navigate to="/admin/auth/login" />;
};
