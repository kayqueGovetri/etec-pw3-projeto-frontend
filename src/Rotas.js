import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import App from "../src/Paginas/App"
import CadastroAluno from "../src/Paginas/CadastroAluno"
import ListagemAlunos from "../src/Paginas/ListagemAlunos"
import SideMenu from "../src/Paginas/SideMenu"


const Rotas = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={SideMenu} />
        <Route path="/aluno/cadastro" component={CadastroAluno} />
        <Route path="/aluno/listagem" component={ListagemAlunos} />
      </Switch>
    </BrowserRouter>
  </>
)

export default Rotas