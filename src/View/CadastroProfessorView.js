import React from 'react';
import CadastroProfessor from '../Paginas/CadastroProfessor.js'
import { Grid } from '@material-ui/core'
import SideMenu from '../Componentes/SideMenu'


// var axios = require("axios");
const CadastroProfessorView = () =>{

    return (
       <>
        <Grid container direction="row">
          <Grid item md={4}>
            <SideMenu />
          </Grid>
          <Grid item md={8}>
            <CadastroProfessor />
          </Grid>
        </Grid>
       </>
    );
}


export default CadastroProfessorView;
