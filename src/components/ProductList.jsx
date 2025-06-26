import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";
import { FaTimes } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";



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
    setMessage("You can only compare up to 3 products.");
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
            {message && (
                <div className="modal-overlay">
                    <div className="modal-alert">
                    <button className="close-btn" onClick={() => setMessage("")}><FaTimes/></button>
                    <p><FaExclamationTriangle color="#facc15" size={18} />{message}</p>
                    <button className="ok-btn" onClick={() => setMessage("")}>OK</button>
                    </div>
                </div>
                )}
        </div>
    )
};

export default ProductList;