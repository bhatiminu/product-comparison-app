import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductList = ({ compareList, setCompareList }) => {
const [message, setMessage] = useState("");
const handleSelect = (id) => {
    if(compareList.includes(id)) {
        setCompareList(compareList.filter((pid) => pid !== id))
    }
    else if (compareList.length<3) {
        setCompareList([...compareList, id])
    }
    else {
    setMessage("⚠️ You can only compare up to 3 products.");
  }
};

   return  (
        <div className="product-list">
            {products.map((product) => {
               return(<ProductCard
                key={product.id}
                product={product}
                isSelected={compareList.includes(product.id)}
                handleSelect={handleSelect}
                />)
            })}
            {message && <p className="warning-message">{message}</p>}
        </div>
    )
};

export default ProductList;