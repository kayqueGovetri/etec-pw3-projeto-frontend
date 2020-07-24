import React, {useState} from 'react';
import CadastroTurma from '../Paginas/CadastroTurma.js'
import { Grid } from '@material-ui/core'
import SideMenu from '../Componentes/SideMenu'

// var axios = require("axios");
const CadastroTurmaView = () =>{

    return (
       <>
        <Grid container direction="row">
          <Grid item md={4}>
            <SideMenu />
          </Grid>
          <Grid item md={8}>
            <CadastroTurma />
          </Grid>
        </Grid>
       </>
    );
}


export default CadastroTurmaView;
