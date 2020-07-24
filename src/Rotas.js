import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import App from "../src/Paginas/App"
import Login from "../src/View/LoginView"
import CadastroAluno from "../src/View/CadastroAlunoView"
import CadastroProfessor from "../src/View/CadastroProfessorView"
import CadastroMateria from "../src/View/CadastroMateriaView"
import CadastroAula from "../src/View/CadastroAulaView"
import CadastroTurma from "../src/View/CadastroTurmaView"
import CadastroNota from "../src/View/CadastroNotaView"

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
              <Route path="/nota/cadastro" exact={true} component={CadastroNota} />
            </>)
          }
      </Switch>
    </BrowserRouter>
  </>
)

export default Rotas