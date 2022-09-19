import { NavLink } from "react-router-dom";
import { hasAnyRoles } from "../../../util/auth";

import "./style.css";

const Navbar = () => {
    return (
        <nav className="admin-nav-container">
            <ul>
                <li>
                    <NavLink to="/admin/products" className=" admin-nav-item">
                        <p>Produtos</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/categories" className="admin-nav-item">
                        <p>Categorias</p>
                    </NavLink>
                </li>
                { hasAnyRoles(['ROLE_ADMIN']) &&
                    <li>
                    <NavLink to="/admin/usuarios" className="admin-nav-item">
                        <p>Usuários</p>
                    </NavLink>
                </li>
                }
            </ul>
        </nav>
    );
};

export default Navbar;
