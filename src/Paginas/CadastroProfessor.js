import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Button, Grid, TextField, Typography, Container, InputAdornment, Divider
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import DescriptionIcon from '@material-ui/icons/Description';
import TodayIcon from '@material-ui/icons/Today';
import EmailIcon from '@material-ui/icons/Email';

import EstiloTextField from '../Componentes/EstiloTextField'
import EstiloMask from '../Componentes/EstiloMask'

import '../Estilizacao.css';

import ProfessorReq from '../Requisições/Professor'

function CadastroProfessor (){

  //#region states e chama do axios
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  const professorReq = new ProfessorReq();

  function handleInsert(event){
      event.preventDefault();

      setEmail('');
      setNome('');
      setDataNascimento('');

      professorReq.Cadastrar({nome, dataNascimento, email, especialidade});

      alert('Parabéns ' + email + ', seu login foi realizado com sucesso!');
  }
  //#endregion
 

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
        marginRight: '90%',
        marginTop: '25%',
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
                <form id="form" className={classes.form} label="Cadastrar Professor" onSubmit={handleInsert}>
                <PersonIcon className={classes.icon} style={{ fontSize: 40 }}/>
                    <Typography variant="h5" className={classes.titulo}>Cadastrar Professor</Typography>
                        <Divider variant="middle" />
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '9%'}}>
                            <EstiloTextField id="nome" label="Nome" required value={nome} onChange={e => setNome(e.target.value)}/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '5px'}}>
                            <EstiloMask id="dataNascimento" label="Data Nascimento" mask={'99/99/9999'} required value={dataNascimento} onChange={e => setDataNascimento(e.target.value)}/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '5px'}}>
                            <EstiloTextField id="email" label="E-mail" placeholder="exemplo@exemplo.com" type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '5px'}}>
                            <EstiloTextField id="especialidade" label="Especialidade" required value={especialidade} onChange={e => setEspecialidade(e.target.value)}/>
                          </Grid>
                        </Grid>

                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >Cadastrar</Button>
                </form>
            </div>
        </Container>
        </>
    );
}

export default CadastroProfessor;