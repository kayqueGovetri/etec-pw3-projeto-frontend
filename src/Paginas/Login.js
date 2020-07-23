import React, {useState} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { Paper, withStyles, Grid, TextField, Button, Typography, InputLabel, Select, MenuItem } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import { sizing } from '@material-ui/system';
import { Face, Fingerprint } from '@material-ui/icons'
import Logar from '../Requisições/Usuario.js'
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';

// var axios = require("axios");


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing.unit * 5.5,
    },
    padding: {
        padding: theme.spacing.unit
    },
    top: {
        top: 15
    },
    paper: {
      marginTop: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0)',
      paddingLeft: '12%',
      paddingRight: '12%',
      paddingTop: '6%',
      padding:'1%',
      borderRadius: 20,
    },
    submit: {
      margin: theme.spacing(4, 0, 4),
      padding: '2.5%',
    },
    text: {
      margin: theme.spacing(3, 0, 0.5),
      borderRadius: 4,
      backgroundColor: 'whitesmoke',
    },
    titulo:{
      textAlign: 'center',
      marginBottom: '5%',
    }
  }));


function Login() {

    //#region states e chamada do Axios
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    

    function handleInsert(event){
        event.preventDefault();

        setEmail('');
        setSenha('');
        
        Logar({email, senha});

        alert('Parabéns ' + email + ', seu login foi realizado com sucesso!');
    }

    //#endregion
    
    document.body.style = 'background: #26a69a;';

    const classes = useStyles();
    return (
        <Grid container justify="center" style={{ marginTop: '150px' }}> 
            <Grid item xls={0} sm={4} xlg={5}/>

            <Grid item xls={12} sm={4} xlg={2}>
                <Paper className={classes.paper}>

                <form onSubmit = {handleInsert} className={classes.form}>
                        <div className={classes.margin}>

                            <Grid container spacing={8} alignItems="flex-end">
                            
                                <Grid item md={true} sm={true} xs={true}>
                                    <Typography
                                        align="center"
                                        color="textPrimary"
                                        variant="h4"
                                    >
                                        Bem vindo ao NSA
                                    </Typography>
                                </Grid>
                            </Grid>
                            
                            <Grid container spacing={8}  alignItems="flex-end">
                            
                                <Grid item md={true} sm={true} xs={true}>
                                        <InputLabel  justify="flex-start" id="txt-role">Entrar como:</InputLabel>
                                            <Select
                                                autoWidth
                                                labelId="role-label"
                                                id="role"
                                                >
                                                <MenuItem value={10}>Aluno</MenuItem>
                                                <MenuItem value={20}>Professor</MenuItem>
                                                <MenuItem value={30}>Secretária</MenuItem>
                                            </Select> 
                                    </Grid> 
                                </Grid>
                            
                            
                            <Grid container spacing={5} alignItems="flex-end">
                                <Grid item>
                                    <Face />
                                </Grid>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField id="email" label="E-mail" type="email" fullWidth autoFocus required  value={email} onChange={e => setEmail(e.target.value)}/>
                                </Grid>
                            </Grid>

                            <Grid container spacing={5} alignItems="flex-end">
                                <Grid item>
                                    <Fingerprint />
                                </Grid>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField id="senha" label="Senha" type="password" fullWidth required  value={senha} onChange={e => setSenha(e.target.value)}/>
                                </Grid>
                            </Grid>

                            <Grid container spacing={10} alignItems="flex-end"><Grid item></Grid></Grid>
                            <Grid container spacing={5} alignItems="flex-end"><Grid item></Grid></Grid>

                            <Grid container justify="flex-end" style={{ marginTop: '10px' }}>
                                <Button type="submit" fullWidth variant="contained" color="primary" style={{ textTransform: "none" } }>Login</Button>
                            </Grid>

                            <Grid container spacing={10} alignItems="flex-end"><Grid item></Grid></Grid>

                        </div>
                    </form>
                </Paper>

            </Grid>
            
            <Grid item xls={0} sm={4} xlg={5}/>
        </Grid>
    );
}


export default Login;
