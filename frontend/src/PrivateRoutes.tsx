import { Navigate } from "react-router-dom";

import { getAuthData } from "./util/requests";

export const PrivateRoutes = ({ children }: any) => {
    const user = getAuthData().access_token;

    return user !== undefined ? children : <Navigate to="/admin/auth/login" />;
};
