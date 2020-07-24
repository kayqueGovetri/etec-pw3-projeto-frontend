import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';

// import {
//   Button, Grid, Typography,
// } from '@material-ui/core'

import Tabela from '../Componentes/Tabela'

const celulas = [
  'Nome',
  'RM',
  'Telefone',
  'Data Nascimento',
  'Data Matricula',
  'CEP',
  'CPF Responsavel',
  'E-mail',
  // 'curso',
  // 'semestre'
  'Ação'
]
const linhas = [
  {
    "telefone": "4444-4444",
    "rm": 19584,
    "dataNascimento": "1999-05-18T16:00:00.000Z",
    "dataMatricula": "2020-05-18T16:00:00.000Z",
    "cep": "06545-999",
    "cpfResponsavel": "19856371896",
    "email": "email@email.com",
    "senha": "321654",
    "_id": "5f05057d8c6aa23590127881",
    "_turma": "5f04f8da5e29e554d83b4468",
    "nome": "Marcus",
    "createdAt": "2020-07-07T23:30:05.291Z",
    "updatedAt": "2020-07-07T23:30:05.291Z",
    "__v": 0
  },
]
const ListagemAlunos = () => {
    return(
        <>
          <Tabela celulas={celulas} linhas={linhas} informacaoTabela="Aluno" width="50%"/>
        </>
    )
}

export default ListagemAlunos;