import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Button, Grid, TextField, Typography, Container, InputAdornment, Divider, MenuItem
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';

import EstiloTextField from '../Componentes/EstiloTextField';
import EstiloMask from '../Componentes/EstiloMask';

import '../Estilizacao.css';
import EstiloDropDown from '../Componentes/EstiloDropDown'

import Cadastro from '../Requisições/Aluno'
var axios = require("axios");

function CadastroAluno (){

  //#region states e chama do axios
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [rm, setRm] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [dataMatricula, setDataMatricula] = useState('');
  const [cep, setCep] = useState('');
  const [cpfResponsavel, setCpfResponsavel] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [turma, setTurma] = useState('');
  const [_turma, setTurmaSelecionada] = useState('');



  useEffect(() => {axios.get(`https://pw3-etec-projeto-backend.herokuapp.com/turmas`, {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
  .then(res => {
    // const professor = res.data;
    setTurma(res.data);
  })},[])

  console.log(turma);
  function handleInsert(event){
      event.preventDefault();

      setEmail('');
      setTelefone('');
      setNome('');
      setCpfResponsavel('');
      setRm('');
      setCep('');
      setDataMatricula('');
      setDataNascimento('');
      setTurmaSelecionada('');


      Cadastro({nome, telefone, rm, dataNascimento, dataMatricula, cep, cpfResponsavel, email, _turma});

      alert('Parabéns ' + email + ', seu login foi realizado com sucesso!');
  }
  //#endregion
 

    document.body.style.backgroundColor = '#e5e5ff';

    const useStyles = makeStyles((theme) => ({
      paper: {
        margin: 'auto',
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
        marginTop: '40%',
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
                <form id="form" className={classes.form} label="Cadastrar Aluno" onSubmit={handleInsert}>
                  <PersonIcon className={classes.icon} style={{ fontSize: 40 }}/>
                    <Typography variant="h5" className={classes.titulo}>Cadastrar Aluno</Typography>
                        <Divider variant="middle" />
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '9%'}}>
                            <EstiloTextField id="nome" label="Nome" required value={nome} onChange={e => setNome(e.target.value)}/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloMask id="Telefone" label="Telefone" mask={'(99)99999-9999'} required value={telefone} onChange={e => setTelefone(e.target.value)}/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloTextField id="rm" label="RM" required value={rm} onChange={e => setRm(e.target.value)}/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloMask id="dataNascimento" label="Data Nascimento" mask={'99/99/9999'} required value={dataNascimento} onChange={e => setDataNascimento(e.target.value)}/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloMask id="dataMatricula" label="Data Matricula" mask={'99/99/9999'} required value={dataMatricula} onChange={e => setDataMatricula(e.target.value)}/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloMask id="CEP" label="CEP" mask={'99999-999'} required value={cep} onChange={e => setCep(e.target.value)}/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloMask id="cpf" label="CPF Responsavel" mask={'999.999.999-99'} required value={cpfResponsavel} onChange={e => setCpfResponsavel(e.target.value)}/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>
                            <EstiloTextField id="email" label="E-mail" placeholder="exemplo@exemplo.com" type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '1.7%'}}>

                          {turma && ( <EstiloDropDown value={_turma} onChange={e => setTurmaSelecionada(e.target.value)}
                                autoWidth
                                labelId="role-label"
                                id="role"
                                >
                                {
                                    turma.turmas.map((item) => {
                                    return <MenuItem value={item._id}>{item.curso + " - " + item.semestre }</MenuItem>
                                    })
                                     
                                }
                            </EstiloDropDown>)}
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >Cadastrar</Button>
                </form>
            </div>
        </Container>
        </>
    );
}

export default CadastroAluno;