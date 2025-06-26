import React from "react";
import '././ProductCard.css'

const ProductCard = ({product, isSelected, handleSelect }) => {
return (
      <div className={`product-card ${isSelected ? "selected" : ""}`}
        tabIndex="0"
        onClick={() => handleSelect(product.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleSelect(product.id);
          }
        }}
      >
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="brand"><strong>{product.brand}</strong></p>
        <p className="price">{product.price}</p>
        <ul className="features">
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