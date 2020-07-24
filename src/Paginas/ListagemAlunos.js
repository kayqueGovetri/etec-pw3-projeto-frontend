import React, {useEffect, useState} from 'react';

// import { makeStyles } from '@material-ui/core/styles';

import {
  Grid
} from '@material-ui/core'

import axios from 'axios';
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



const ListagemAlunos = () => {
    const [linhas, setLinhas] = useState([])
    useEffect(() => {
      axios.get(`https://pw3-etec-projeto-backend.herokuapp.com/alunos`, {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
      .then(res => { setLinhas(res.data);})}
    ,[])
    console.log(linhas)
    return(
        <>
        {linhas && linhas.alunos && (
          <Grid container spacing={1}>
            <Grid item md={11} style={{marginTop: '9%'}}>
              <Tabela celulas={celulas} linhas={linhas && linhas.alunos} informacaoTabela="Aluno" width="100%"/>
            </Grid>
          </Grid>
        )}
      </>
    )
}

export default ListagemAlunos;