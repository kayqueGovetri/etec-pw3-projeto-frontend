import React from 'react';
import ListagemProfessores from '../Paginas/ListagemProfessores.js'
import { Grid } from '@material-ui/core'
import SideMenu from '../Componentes/SideMenu'


// var axios = require("axios");
const ListagemProfessoresView = () =>{

    return (
       <>
        <Grid container direction="row">
          <Grid item md={4}>
            <SideMenu />
          </Grid>
          <Grid item md={8}>
            <ListagemProfessores />
          </Grid>
        </Grid>
       </>
    );
}


export default ListagemProfessoresView;
