import React, {useState} from 'react';
import CadastroNota from '../Paginas/CadastroNota.js'
import { Grid } from '@material-ui/core'
import SideMenu from '../Componentes/SideMenu'


// var axios = require("axios");
const CadastroNotaView = () =>{

    return (
      <>
      <Grid container direction="row">
          <Grid item md={4}>
            <SideMenu />
          </Grid>
          <Grid item md={8}>
            <CadastroNota />
          </Grid>
        </Grid>
     </>
    );
}


export default CadastroNotaView;
