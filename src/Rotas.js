import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import App from "../src/Paginas/App"
import CadastroAluno from "../src/Paginas/CadastroAluno"

const Rotas = () => (
  <>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/CadastroAluno" component={CadastroAluno} />
      </Switch>
    </BrowserRouter>
  </>
)

export default Rotas