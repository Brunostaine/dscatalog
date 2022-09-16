import "./styles.css";

import { ReactComponent as ArroIcon } from "../../assets/images/arrow.svg";
import ProductPrice from "../../components/ProductPrice";
const ProductDetails = () => {
    return (
        <div className="product-details-container">
            <div className="product-details-card">
                <div className="goback-container">
                    <ArroIcon />
                    <h2>Voltar</h2>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="img-container">
                                <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg" alt="name" />
                            </div>
                            <div className="name-price-container">
                                <h1>Nome produto</h1>
                                <ProductPrice price={2345.67} />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="description-container">
                                <h2>Descrição do produto</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eligendi est pariatur perferendis doloribus impedit sunt, tempore incidunt ad sint totam eum aut. Cupiditate quaerat ullam est distinctio soluta maxime?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
