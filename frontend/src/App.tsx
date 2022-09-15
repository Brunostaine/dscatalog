import "./assets/styles/custom.scss";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

function App() {
    return (
        <>
            <Navbar />
            <Catalog />
        </>
    );
}

export default App;
