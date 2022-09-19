import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";

import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Auth from "./pages/Admin/Auth";
import Login from "./pages/Admin/Auth/Login";
import Products from "./pages/Admin/Products";
import Users from "./pages/Admin/User";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import List from "./pages/Admin/Products/List";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/products" element={<Catalog />} />

                <Route path="/products/:productId" element={<ProductDetails />} />

                <Route path="/admin" element={<Admin />}>
                    <Route
                        path="/admin/products/*"
                        element={
                            <PrivateRoutes>
                                <Products />
                            </PrivateRoutes>
                        }
                        children={<Route path="/admin/products/*" element={<List />} />}
                    />
                    <Route
                        path="/admin/categories"
                        element={
                            <PrivateRoutes>
                                <h1>Categoria</h1>
                            </PrivateRoutes>
                        }
                    />
                    <Route
                        path="/admin/usuarios"
                        element={
                            <PrivateRoutes>
                                <Users />
                            </PrivateRoutes>
                        }
                    />
                </Route>

                <Route path="/admin/auth" element={<Auth />}>
                    <Route path="/admin/auth/login" element={<Login />} />
                    <Route path="/admin/auth/register" element={<h1>Card de Signup</h1>} />
                    <Route path="/admin/auth/recover" element={<h1>Card de Recover</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
