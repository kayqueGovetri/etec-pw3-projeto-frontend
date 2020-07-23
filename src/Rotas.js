import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import App from "../src/Paginas/App"
import Login from "../src/Paginas/Login"
import CadastroAluno from "../src/Paginas/CadastroAluno"
import CadastroProfessor from "../src/Paginas/CadastroProfessor"
import CadastroMateria from "../src/Paginas/CadastroMateria"
import CadastroAula from "../src/Paginas/CadastroAula"
import CadastroTurma from "../src/Paginas/CadastroTurma"
import CadastroNota from "../src/Paginas/CadastroNota"

const Rotas = () => (
  <>
    <BrowserRouter>
      <Switch>
          <Route path="/login" exact={true} component={Login} />
          {localStorage.getItem('token') && (
            <>
              <Route path="/" exact={true} component={App} />
              <Route path="/aluno/cadastro" exact={true} component={CadastroAluno} />
              <Route path="/professor/cadastro" exact={true} component={CadastroProfessor} />
              <Route path="/materia/cadastro" exact={true} component={CadastroMateria} />
              <Route path="/aula/cadastro" exact={true} component={CadastroAula} />
              <Route path="/turma/cadastro" exact={true} component={CadastroTurma} />
            </>)
          }
          {!localStorage.getItem('token') && (<Route path="*" render={() => <Redirect to="/login" /> }/>) }
      </Switch>
    </BrowserRouter>
  </>
)

export default Rotas