import React from "react";
import ProductDetails from "./component/ProductDetails.js";
import { BrowserRouter,Await, Route,Routes } from 'react-router-dom';

import "./App.css";


import Home from "./component/Home.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        
          <Route path="/"  element={<Home/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          
       
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;