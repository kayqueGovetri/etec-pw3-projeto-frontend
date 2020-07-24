import React from 'react';
import ListagemAlunos from '../Paginas/ListagemAlunos.js'
import { Grid } from '@material-ui/core'
import SideMenu from '../Componentes/SideMenu'


// var axios = require("axios");
const ListagemAlunosView = () =>{

    return (
       <>
        <Grid container direction="row">
          <Grid item md={4}>
            <SideMenu />
          </Grid>
          <Grid item md={8}>
            <ListagemAlunos />
          </Grid>
        </Grid>
       </>
    );
}


export default ListagemAlunosView;
