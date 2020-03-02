import React from "react";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
