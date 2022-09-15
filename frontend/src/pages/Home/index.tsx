import { ReactComponent as MainImage } from "../../assets/images/image.svg";

import "./styles.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-card">
                <div className="home-content-container">
                    <h1>Conheça nosso calálogo de produtos</h1>
                </div>
                <div className="home-image-container">
                    <MainImage />
                </div>
            </div>
        </div>
    );
};

export default Home;
