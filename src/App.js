import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CompareBar from "./components/CompareBar";
import CompareView from "./components/CompareView";


function App() {
  const [compareList, setCompareList] = useState([]);
  const [showCompareView, setShowCompareView] =useState(false);

  const handleCompare = ()=> {
    setShowCompareView(true);
  };
return (
    <div className="App">
      <h1>Product Comparison App</h1>
      {showCompareView ? (
        <CompareView
          compareList={compareList}
          setShowCompareView={setShowCompareView}
        />
      ) : (
        <>
          <ProductList compareList={compareList} setCompareList={setCompareList} />
          {compareList.length >= 2 && (
            <CompareBar
              compareList={compareList}
              setCompareList={setCompareList}
              onCompare={handleCompare}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
