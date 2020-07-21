import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import App from "../src/Paginas/App"
import CadastroAluno from "../src/Paginas/CadastroAluno"
import ListagemAlunos from "../src/Paginas/ListagemAlunos"



const Rotas = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/aluno/cadastro" component={CadastroAluno} />
        <Route path="/aluno/listagem" component={ListagemAlunos} />
      </Switch>
    </BrowserRouter>
  </>
)

export default Rotas