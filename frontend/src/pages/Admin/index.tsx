import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";

import "./styles.css";

const Admin = () => {
    let navigate = useNavigate();

    useEffect(() => {
        navigate("/admin/products");
    }, []);
    
    return (
        <div className="admin-container">
            <Navbar />
            <div className="admin-content">
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;
