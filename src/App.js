import React from "react";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
