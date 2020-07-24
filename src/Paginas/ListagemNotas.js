import React, {useEffect, useState} from 'react';

// import { makeStyles } from '@material-ui/core/styles';

import {
  Grid
} from '@material-ui/core'

import axios from 'axios';
import Tabela from '../Componentes/Tabela'

const celulas = [
  'aluno',
  'materia',
  'professor',
  'materia',
  'semestre',
  'nota'
]

const ListagemNotas = () => {
    const [linhas, setLinhas] = useState([])
    useEffect(() => {
      axios.get(`https://pw3-etec-projeto-backend.herokuapp.com/notas`, {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
      .then(res => { setLinhas(res.data);})}
    ,[])
    return(
      <>
      {linhas && linhas.notas && (
        <Grid container spacing={1}>
          <Grid item md={11} style={{marginTop: '9%'}}>
            <Tabela celulas={celulas} linhas={linhas && linhas.notas} informacaoTabela="Nota" width="100%"/>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ListagemNotas;