import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/products" element={<Catalog />} />
            </Routes>
            <Routes>
                <Route path="/products/:productId" element={<ProductDetails />} />
            </Routes>
            <Routes>
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
