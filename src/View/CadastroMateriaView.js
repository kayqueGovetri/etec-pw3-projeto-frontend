import React from 'react';
import CadastroMateria from '../Paginas/CadastroMateria.js'
import { Grid } from '@material-ui/core'
import SideMenu from '../Componentes/SideMenu'

// var axios = require("axios");
const CadastroMateriaView = () =>{

    return (
       <>
        <Grid container direction="row">
            <Grid item md={4}>
              <SideMenu />
            </Grid>
            <Grid item md={8}>
              <CadastroMateria />
            </Grid>
          </Grid>
       </>
    );
}


export default CadastroMateriaView;
