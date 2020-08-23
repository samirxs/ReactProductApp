import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import useAxiosGet from "../Hooks/HttpRequests";

function Home() {
    const url = `https://5f413c3bd4b4790016fd70b8.mockapi.io/api/v1/products?page=1&limit=10`;

    let products = useAxiosGet(url);
    let content = null;


    if (products.error) {
        content = <p>There is error.</p>;
    }

    if (products.loading) {
        content = <Loader></Loader>;
    }

    if (products.data) {
        content = products.data.map((product, key) => (
            <div key={key}>
                <ProductCard
                    product={product}
                />
            </div>
        ));
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">Best Sellers</h1>
            {content}
        </div>
    );
}

export default Home;
