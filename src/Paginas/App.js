import React from 'react';
import { Grid} from "@material-ui/core";

import ListagemProfessores from './ListagemProfessores'

const App = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <ListagemProfessores />
      </Grid>
    </Grid>
  )
};

export default App;
