import "./style.css";

const Navbar = () => {
    return (
        <nav className="admin-nav-container">
            <ul>
                <li>
                    <a href="#" className="active admin-nav-item">
                        <p>Produtos</p>
                    </a>
                </li>
                <li>
                    <a href="3" className="admin-nav-item">
                        <p>Categorias</p>
                    </a>
                </li>
                <li>
                    <a href="#" className="admin-nav-item">
                        <p>Usuários</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
