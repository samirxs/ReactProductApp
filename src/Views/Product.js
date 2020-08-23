import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import useAxiosGet from "../Hooks/HttpRequests";

function Product() {
    const { id } = useParams();
    const url = `https://5f413c3bd4b4790016fd70b8.mockapi.io/api/v1/products/${id}`;

    let product = useAxiosGet(url);

    let content = null;


    if (product.error) {
        content = <p>There is error.</p>;
    }

    if (product.loading) {
        content = <Loader></Loader>;
    }

    if (product.data) {
        content = (
            <div>
                <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
                <div>
                    <img
                        src={product.data.images[0].image}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>{product.data.description}</div>
            </div>
        );
    }
    return <div> {content} </div>;
}

export default Product;
