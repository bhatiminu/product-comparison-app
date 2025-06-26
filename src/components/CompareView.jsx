import React from "react";
import products from "../data/products";
import '././CompareView.css'

const CompareView = ({ compareList, setShowCompareView }) => {
  const selected = products.filter((p) => compareList.includes(p.id));

  // return (
  //   <div className="compare-view">
  //     <h2>Product Comparison</h2>
  //     <button onClick={() => setShowCompareView(false)}>Back</button>
  //     <div className="comparison-table">
  //       {["Name", "Brand", "Price", "Features"].map((label, index) => (
  //         <div key={index} className="row">
  //           <strong>{label}</strong>
  //           {selected.map((product) => (
  //             <div key={product.id} className="cell">
  //               {label === "Features" ? (
  //                 <ul>
  //                   {product.features.map((f, idx) => (
  //                     <li key={idx}>{f}</li>
  //                   ))}
  //                 </ul>
  //               ) : (
  //                 product[label.toLowerCase()]
  //               )}
  //             </div>
  //           ))}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
  <div className="compare-view">
   <div className="compare-header">
    <button onClick={() => setShowCompareView(false)}>Back</button>
    <h2>Product Comparison</h2>
  </div>

    <div className="table-container">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Specification</th>
            {selected.map((product) => (
              <th key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "60px", borderRadius: "6px" }}
                />
                <div style={{ marginTop: "6px", fontWeight: "600" }}>
                  {product.name}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {["Brand", "Price", "Features"].map((label) => (
            <tr key={label}>
              <td><strong>{label}</strong></td>
              {selected.map((product) => (
                <td key={product.id}>
                  {label === "Features" ? (
                    <ul style={{ paddingLeft: "16px", textAlign: "left" }}>
                      {product.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  ) : (
                    product[label.toLowerCase()]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

};

export default CompareView;
