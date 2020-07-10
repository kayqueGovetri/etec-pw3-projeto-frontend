import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    height: 200,
    width: "100%",
    top: 0,
    background: "#7159C1"
  },
});

const App = () => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={classes.root}>Teste</Card>  
      </Grid>
    </Grid>
  )
};

export default App;
