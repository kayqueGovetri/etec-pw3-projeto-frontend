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
import ListagemAlunos from '../src/View/ListagemAlunosView'
import ListagemAulas from '../src/View/ListagemAulasView'
import ListagemTurmas from '../src/View/ListagemTurmasView'
import ListagemProfessores from '../src/View/ListagemProfessoresView'
import ListagemNotas from '../src/View/ListagemNotasView'
import AtualizarAluno from '../src/Paginas/AtualizarAluno'

const Rotas = () => (
  <>
    <BrowserRouter>
      <Switch>
          <Route path="/login" exact={true} component={Login} />
          {localStorage.getItem('token') && (
            <>
              <Route path="/" exact={true} component={App} />

              <Route path="/aluno/cadastro" exact={true} component={CadastroAluno} />
              <Route path="/aluno/listagem" exact={true} component={ListagemAlunos} />
              <Route path="/aluno/Atualizar" exact={true} component={AtualizarAluno} />
              
              <Route path="/professor/cadastro" exact={true} component={CadastroProfessor} />
              <Route path="/professor/listagem" exact={true} component={ListagemProfessores} />

              <Route path="/materia/cadastro" exact={true} component={CadastroMateria} />

              <Route path="/aula/cadastro" exact={true} component={CadastroAula} />
              <Route path="/aula/listagem" exact={true} component={ListagemAulas} />

              <Route path="/turma/cadastro" exact={true} component={CadastroTurma} />
              <Route path="/turma/listagem" exact={true} component={ListagemTurmas} />

              <Route path="/nota/cadastro" exact={true} component={CadastroNota} />
              <Route path="/nota/listagem" exact={true} component={ListagemNotas} />
            </>)
          }
      </Switch>
    </BrowserRouter>
  </>
)

export default Rotas