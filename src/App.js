import React from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Cart/>
      <Header/>
      <h1>cart</h1>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
