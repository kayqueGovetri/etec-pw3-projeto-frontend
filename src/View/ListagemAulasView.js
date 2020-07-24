import React from 'react';
import ListagemAulas from '../Paginas/ListagemAulas.js'
import { Grid } from '@material-ui/core'
import SideMenu from '../Componentes/SideMenu'


// var axios = require("axios");
const ListagemAulasView = () =>{

    return (
       <>
        <Grid container direction="row">
          <Grid item md={4}>
            <SideMenu />
          </Grid>
          <Grid item md={8}>
            <ListagemAulas />
          </Grid>
        </Grid>
       </>
    );
}


export default ListagemAulasView;
