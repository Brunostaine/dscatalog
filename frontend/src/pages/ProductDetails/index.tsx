import { ReactComponent as ArroIcon } from "../../assets/images/arrow.svg";
import ProductPrice from "../../components/ProductPrice";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./styles.css";
import { Product } from "../../types/product";
import axios from "axios";
import { BASE_URL } from "../../util/requests";

const ProductDetails = () => {
    const [product, SetProduct] = useState<Product>();

    useEffect(() => {
        axios.get(BASE_URL + "/products/2").then((response) => {
            SetProduct(response.data);
        });
    }, []);

    return (
        <div className="product-details-container">
            <div className="base-card product-details-card">
                <Link to="/products">
                    <div className="goback-container">
                        <ArroIcon />
                        <h2>Voltar</h2>
                    </div>
                </Link>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-container">
                            <img src={product?.imgUrl} alt={product?.name} />
                        </div>
                        <div className="name-price-container">
                            <h1>{product?.name}</h1>
                            {product && <ProductPrice price={product?.price} />}
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="description-container">
                            <h2>Descrição do Produto</h2>
                            <p>{product?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
