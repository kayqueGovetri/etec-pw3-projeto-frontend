import React, {useState} from 'react';
import { Grid } from '@material-ui/core'
import CadastroAluno from '../Paginas/CadastroAluno.js'
import {
    Redirect, Link
  } from "react-router-dom";
import SideMenu from '../Componentes/SideMenu'

// var axios = require("axios");
const CadastroAlunoView = () =>{

    return (
       <>
          <Grid container direction="row">
            <Grid item md={4}>
              <SideMenu />
            </Grid>
            <Grid item md={8}>
              <CadastroAluno />
            </Grid>
          </Grid>
       </>
    );
}


export default CadastroAlunoView;
