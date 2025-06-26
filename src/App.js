import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CompareBar from "./components/CompareBar";
import CompareView from "./components/CompareView";
import { FaSun, FaMoon } from "react-icons/fa";
import './index.css'
import { useEffect } from "react";


function App() {
 const [compareList, setCompareList] = useState(() => {
  const saved = localStorage.getItem("compareList");
  return saved ? JSON.parse(saved) : [];
});
  const [showCompareView, setShowCompareView] =useState(false);
 const [isDarkMode, setIsDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "dark" ? true : false;
 });
 

const toggleTheme = () => {
  setIsDarkMode((prev) => {
     const newMode = !prev;
    localStorage.setItem("theme", newMode ? "dark" : "light");
    return newMode;
  });
};
useEffect(() => {
  localStorage.setItem("compareList", JSON.stringify(compareList));
}, [compareList]);
  const handleCompare = ()=> {
    setShowCompareView(true);
  };
return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <div className="header-bar">
      <h1 className="app-title">Product Comparison App</h1>
      <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? <><FaMoon /> Dark Mode</> : <><FaSun /> Light Mode</>}
      </button>
      </div>
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
