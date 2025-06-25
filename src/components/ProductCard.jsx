import React from "react";
import '././ProductCard.css'

const ProductCard = ({product, isSelected, handleSelect }) => {
return (
      <div className={`product-card ${isSelected ? "selected" : ""}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p><strong>{product.brand}</strong></p>
        <p>{product.price}</p>
        <ul>
        {product.features.map((f, idx) => {
           return ( <li key={idx}>
                {f}
            </li>)
        })}
        </ul>
         <button onClick={() => handleSelect(product.id)}>
        {isSelected ? "Remove" : "Add to Compare"}
      </button>
      </div>
  
)
}
export default ProductCard;