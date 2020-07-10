import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import App from "../src/Paginas/App"

const Rotas = () => (
  <>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
      </Switch>
    </BrowserRouter>
  </>
)

export default Rotas