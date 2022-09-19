import "./styles.css";
import "../../../node_modules/bootstrap/js/src/collapse.js";
import { useEffect, useContext } from "react";

import { Link, useNavigate, NavLink } from "react-router-dom";

import { AuthContext } from "../../AuthContext";
import { getTokenData, isAuthenticated } from "../../util/auth";
import { removeAuthData } from "../../util/storage";

const Navbar = () => {
    const { authContextData, setAuthContextData } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            setAuthContextData({
                authenticated: true,
                tokenData: getTokenData(),
            });
        } else {
            setAuthContextData({
                authenticated: false,
            });
        }
    }, [setAuthContextData]);

    const handleLogout = (e: any) => {
        e.preventDefault();
        removeAuthData();
        setAuthContextData({
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
                    {authContextData.authenticated ? (
                        <>
                            <span className="nav-username">{authContextData.tokenData?.user_name}</span>
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
