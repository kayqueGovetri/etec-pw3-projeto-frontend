import React, {useState} from 'react';
import { Grid } from '@material-ui/core'
import SideMenu from '../Componentes/SideMenu'
import CadastroAula from '../Paginas/CadastroAula.js'
// var axios = require("axios");
const CadastroAulaView = () =>{

    return (
          <Grid container direction="row">
            <Grid item md={4}>
              <SideMenu />
            </Grid>
            <Grid item md={8}>
              <CadastroAula />
            </Grid>
          </Grid>
    );
}


export default CadastroAulaView;
