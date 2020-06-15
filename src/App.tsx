import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/main"} component={Main} />
          <Route exact path={"/"} component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
