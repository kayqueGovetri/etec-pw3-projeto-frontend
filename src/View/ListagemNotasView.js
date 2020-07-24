import React from 'react';
import ListagemNotas from '../Paginas/ListagemNotas.js'
import { Grid } from '@material-ui/core'
import SideMenu from '../Componentes/SideMenu'


// var axios = require("axios");
const ListagemNotasView = () =>{

    return (
       <>
        <Grid container direction="row">
          <Grid item md={4}>
            <SideMenu />
          </Grid>
          <Grid item md={8}>
            <ListagemNotas />
          </Grid>
        </Grid>
       </>
    );
}


export default ListagemNotasView;
