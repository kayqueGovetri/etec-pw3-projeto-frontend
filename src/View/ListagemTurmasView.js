import React from 'react';
import ListagemTurmas from '../Paginas/ListagemTurmas.js'
import { Grid } from '@material-ui/core'
import SideMenu from '../Componentes/SideMenu'


// var axios = require("axios");
const ListagemTurmasView = () =>{

    return (
       <>
        <Grid container direction="row">
          <Grid item md={4}>
            <SideMenu />
          </Grid>
          <Grid item md={8}>
            <ListagemTurmas />
          </Grid>
        </Grid>
       </>
    );
}


export default ListagemTurmasView;
