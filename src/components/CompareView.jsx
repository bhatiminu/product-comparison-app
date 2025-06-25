import React from "react";
import products from "../data/products";
import '././CompareView.css'

const CompareView = ({ compareList, setShowCompareView }) => {
  const selected = products.filter((p) => compareList.includes(p.id));

  return (
    <div className="compare-view">
      <h2>Product Comparison</h2>
      <button onClick={() => setShowCompareView(false)}>Back</button>
      <div className="comparison-table">
        {["Name", "Brand", "Price", "Features"].map((label, index) => (
          <div key={index} className="row">
            <strong>{label}</strong>
            {selected.map((product) => (
              <div key={product.id} className="cell">
                {label === "Features" ? (
                  <ul>
                    {product.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                ) : (
                  product[label.toLowerCase()]
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareView;
