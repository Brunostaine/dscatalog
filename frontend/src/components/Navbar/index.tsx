import "./styles.css";
import "../../../node_modules/bootstrap/js/src/collapse.js";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-primary main-nav navbar-dark">
            <div className="container-fluid">
                <a href="link" className=" nav-logo-text">
                    <h4>BS Produtcs</h4>
                </a>

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
                            <a href="link" className="active">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="link">Catálogo</a>
                        </li>
                        <li>
                            <a href="link">Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
