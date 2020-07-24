import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid} from "@material-ui/core";
import Login from "../Paginas/Login"

const useStyles = makeStyles({
  root: {
    position: "absolute",
    height: 200,
    width: "50%",
    top: 0,
    background: "#7159C1"
    
  },
});

const App = () => {
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
                        >
      <Grid item xs={12}>
        Teste
      </Grid>
    </Grid>
  )
};

export default App;
