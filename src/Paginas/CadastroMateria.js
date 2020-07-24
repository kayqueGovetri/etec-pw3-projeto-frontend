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

import Cadastro from '../Requisições/Materia'

function CadastroMateria (){

  //#region states e chama do axios
  const [nome, setNome] = useState('');
  const [semestre, setSemestre] = useState('');
  const [curso, setCurso] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  

  function handleInsert(event){
      event.preventDefault();

      setNome('');
      setSemestre('');
      setCurso('');
      setEspecialidade('');

      Cadastro({nome, semestre, especialidade, curso});

      alert('Parabéns ' + nome + ', seu login foi realizado com sucesso!');
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
                <form id="form" className={classes.form} label="Cadastrar Materia" onSubmit={handleInsert}>
                    <Typography variant="h5" className={classes.titulo}>Cadastrar Materia</Typography>
                        <Divider variant="middle" />
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={1}>
                            <PersonIcon />
                          </Grid>
                          <Grid item md={11} style={{marginTop: '9%'}}>
                            <EstiloTextField id="nome" label="Nome" required value={nome} onChange={e => setNome(e.target.value)}/>
                          </Grid>
                        </Grid>
                        
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={1}>
                            <EmailIcon />
                          </Grid>
                          <Grid item md={11} style={{marginTop: '5px'}}>
                            <EstiloTextField id="semestre" label="Semestre" required value={semestre} onChange={e => setSemestre(e.target.value)}/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={1}>
                            <DescriptionIcon />
                          </Grid>
                          <Grid item md={11} style={{marginTop: '5px'}}>
                            <EstiloTextField id="especialidade" label="Especialidade" required value={especialidade} onChange={e => setEspecialidade(e.target.value)}/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={1}>
                            <DescriptionIcon />
                          </Grid>
                          <Grid item md={11} style={{marginTop: '5px'}}>
                            <EstiloTextField id="curso" label="Curso" required value={curso} onChange={e => setCurso(e.target.value)}/>
                          </Grid>
                        </Grid>

                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >Cadastrar</Button>
                </form>
            </div>
        </Container>
        </>
    );
}

export default CadastroMateria;