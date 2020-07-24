import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Button, Grid, TextField, Typography, Container, InputAdornment, Divider
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

import EstiloTextField from '../Componentes/EstiloTextField';
import EstiloMask from '../Componentes/EstiloMask';

import '../Estilizacao.css';

function CadastroAluno (){

    document.body.style.backgroundColor = '#e5e5ff';

    const useStyles = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
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
      },
      icon: {
        margin: theme.spacing(0, 23, 0),
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.info.main,
        borderRadius: 20,
      }
    }));

    const classes = useStyles();
    return(
        <>
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <form id="form" className={classes.form} label="Cadastrar Aluno">
                <PersonIcon className={classes.icon} style={{ fontSize: 40 }}/>
                    <Typography variant="h5" className={classes.titulo}>Cadastrar Aluno</Typography>
                        <Divider variant="middle" />
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '9%'}}>
                            <EstiloTextField id="nome" label="Nome" required/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloMask id="Telefone" label="Telefone" mask={'(99)99999-9999'} required/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloTextField id="rm" label="RM" required/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloMask id="dataNascimento" label="Data Nascimento" mask={'99/99/9999'} required/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloMask id="dataMatricula" label="Data Matricula" mask={'99/99/9999'} required/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloMask id="CEP" label="CEP" mask={'99999-999'} required/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloMask id="cpf" label="CPF Responsavel" mask={'999.999.999-99'} required/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloTextField id="email" label="E-mail" placeholder="exemplo@exemplo.com" type="email" required/>
                          </Grid>
                        </Grid>

                        <Button type="submit" fullWidth variant="contained" color="primary" style={{padding: '3%'}} className={classes.submit} >Cadastrar</Button>
                </form>
            </div>
        </Container>
        </>
    );
}

export default CadastroAluno;