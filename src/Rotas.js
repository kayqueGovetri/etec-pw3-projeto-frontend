import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import App from "../src/Paginas/App"
import Login from "../src/Paginas/Login"

const Rotas = () => (
  <>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/login" exact={true} component={Login} />

      </Switch>
    </BrowserRouter>
  </>
)

export default Rotas