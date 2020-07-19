import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button, Grid, TextField, Typography, Container, InputAdornment, Divider
} from '@material-ui/core'
import { 
  PersonIcon, CallIcon, DescriptionIcon , TodayIcon, EmailIcon
} from "@material-ui/icons";

import EstiloTextField from '../Componentes/EstiloTextField'
import EstiloMask from '../Componentes/EstiloMask'

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
      }
    }));

    const classes = useStyles();
    return(
        <>
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <form id="form" className={classes.form} label="Cadastrar Aluno">
                    <Typography variant="h5" className={classes.titulo}>Cadastrar Aluno</Typography>
                        <Divider variant="middle" />
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={1}>
                            <PersonIcon />
                          </Grid>
                          <Grid item md={10} style={{marginTop: '5px'}}>
                            <EstiloTextField id="nome" label="Nome" />
                          </Grid>
                        </Grid>
                        <TextField className={classes.text} id="Telefone" fullWidth variant="outlined" placeholder="(__)____-____" size="small" inputProps={{maxLength :11}} 
                        InputProps={{startAdornment: (<InputAdornment position="start"> <CallIcon /></InputAdornment>),}} required/><br/>
                        <TextField className={classes.text} id="RM" fullWidth variant="outlined" size="small" placeholder="RM"
                        InputProps={{startAdornment: (<InputAdornment position="start"> <DescriptionIcon /></InputAdornment>),}} required/><br/>
                        <TextField className={classes.text} id="dataNascimento" fullWidth variant="outlined" size="small" placeholder="Data Nascimento"
                        InputProps={{startAdornment: (<InputAdornment position="start"> <TodayIcon /></InputAdornment>),}} required/><br/>
                        <TextField className={classes.text} id="dataMatricula" fullWidth variant="outlined" size="small" placeholder="Data Matricula"
                        InputProps={{startAdornment: (<InputAdornment position="start"> <TodayIcon /></InputAdornment>),}} required/><br/>
                        <TextField className={classes.text} id="cep" fullWidth variant="outlined" placeholder="CEP" size="small"
                        InputProps={{startAdornment: (<InputAdornment position="start"> <DescriptionIcon /></InputAdornment>),}} required/><br/>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={1}>
                            <DescriptionIcon />
                          </Grid>
                          <Grid item md={10} style={{marginTop: '5px'}}>
                            <EstiloMask id="cpf" label="CPF Responsavel" mask={'999.999.999-99'} />
                          </Grid>
                        </Grid>
                        <TextField className={classes.text} id="email" fullWidth variant="outlined" placeholder="exemplo@exemplo.com" size="small"
                        InputProps={{startAdornment: (<InputAdornment position="start"> <EmailIcon /></InputAdornment>),}} required/><br/>

                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >Cadastrar</Button>
                </form>
            </div>
        </Container>
        </>
    );
}

export default CadastroAluno;