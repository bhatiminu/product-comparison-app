import React from "react";
import products from "../data/products";
import '././CompareBar.css';

const CompareBar = ({compareList, setCompareList, onCompare}) => {

const selectedProducts = products.filter((product) => compareList.includes(product.id));

const handleRemove = (id) => {
    setCompareList(compareList.filter((pid) => pid !== id))
};

return (
    <div className="compare-bar">
        <h3>Selected Products</h3>
        <div className="selected-products">
            {selectedProducts.map((product) => {
              return ( <div key={product.id} className="selected-product">
                    <span>{product.name}</span>
                    <button onClick={() => handleRemove(product.id)}>Remove</button>
                </div>)
            })}
        </div>
         <button onClick={onCompare} className="compare-button">
        Compare
      </button>
    </div>
)

}

export default CompareBar