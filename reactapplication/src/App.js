import React from "react";
import Nav from './components/nav';
import Search from "./components/search";
import ProductsRender from "./components/products";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Search/>
      <ProductsRender/>
     </div>
  );
}

export default App;
