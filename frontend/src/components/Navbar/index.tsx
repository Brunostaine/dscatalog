import "./styles.css";
import "../../../node_modules/bootstrap/js/src/collapse.js";
import { useState, useEffect } from "react";

import { Link, useNavigate, NavLink } from "react-router-dom";
import { getTokenData, isAuthenticated, removeAuthData, TokenData } from "../../util/requests";

type AuthData = {
    authenticated: boolean;
    tokenData?: TokenData;
};

const Navbar = () => {
    const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            setAuthData({
                authenticated: true,
                tokenData: getTokenData(),
            });
        } else {
            setAuthData({
                authenticated: false,
            });
        }
    }, []);

    const handleLogout = (e: any) => {
        e.preventDefault();
        removeAuthData();
        setAuthData({
            authenticated: false,
        });
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-md bg-primary main-nav navbar-dark">
            <div className="container-fluid">
                <Link to="/" className=" nav-logo-text">
                    <h4>BS Produtcs</h4>
                </Link>

                <button
                    className="navbar-toggler button-hamburguer"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#bsproducts-navbar"
                    aria-controls="bsproducts-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="bsproducts-navbar">
                    <ul className="navbar-nav offset-md-2 main-menu">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">Catálogo</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin">Admin</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav-login-logout">
                    {authData.authenticated ? (
                        <>
                            <span className="nav-username">{authData.tokenData?.user_name}</span>
                            <Link to="#" onClick={handleLogout}>
                                LOGOUT
                            </Link>
                        </>
                    ) : (
                        <Link to="/admin/auth/login">LOGIN</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
