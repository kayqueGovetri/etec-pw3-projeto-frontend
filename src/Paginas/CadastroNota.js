import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Button, Grid, TextField, Typography, Container, InputAdornment, Divider, MenuItem, Select
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import DescriptionIcon from '@material-ui/icons/Description';
import TodayIcon from '@material-ui/icons/Today';
import EmailIcon from '@material-ui/icons/Email';


import EstiloTextField from '../Componentes/EstiloTextField'
import EstiloMask from '../Componentes/EstiloMask'
import EstiloDropDown from '../Componentes/EstiloDropDown'


import '../Estilizacao.css';

import NotaReq from '../Requisições/Nota';
var axios = require("axios");


function CadastroNota (){

  //#region states e chama do axios
  const [nota, setNota] = useState('');
  const [_aulas, setAulaSelecionada] = useState('');
  const[aulas, setAulas] = useState('');
  const [_alunos, setAlunoSelecionada] = useState('');
  const[alunos, setAlunos] = useState('');


  
//     function  ListaProfessores(){
//     return  professorReq.GetProfessores();
//   }

//   const professores = ListaProfessores();
// let professores = professorReq.GetProfessores();


  useEffect(() => {axios.get(`https://pw3-etec-projeto-backend.herokuapp.com/aulas`, {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
  .then(res => {
    // const professor = res.data;
    setAulas(res.data);
  })},[])

  useEffect(() => {axios.get(`https://pw3-etec-projeto-backend.herokuapp.com/alunos`, {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
  .then(res => {
    // const professor = res.data;
    setAlunos(res.data);
  })},[])

  console.log(aulas);
  console.log(alunos);

  function handleInsert(event){
      event.preventDefault();

      setNota('');
      setAulaSelecionada('');
      setAlunoSelecionada('');


    NotaReq({nota ,_aula: _aulas, _aluno: _alunos})
      
      alert('Parabéns ' + nota + _alunos + ', seu login foi realizado com sucesso!');

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
        marginTop: '30%',
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
                <form id="form" className={classes.form} label="Cadastrar Nota" onSubmit={handleInsert}>
                <PersonIcon className={classes.icon} style={{ fontSize: 40 }}/>
                    <Typography variant="h5" className={classes.titulo}>Cadastrar Nota</Typography>
                        <Divider variant="middle" />
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '9%'}}>
                          {aulas && ( <EstiloDropDown value={nota} onChange={e => setNota(e.target.value)}
                                autoWidth
                                labelId="role-label"
                                id="role"
                                >
                               <MenuItem value={"MB"}>MB</MenuItem>
                               <MenuItem value={"B"}>B</MenuItem>
                               <MenuItem value={"R"}>R</MenuItem>
                               <MenuItem value={"I"}>I</MenuItem>
                            </EstiloDropDown>)}
                            </Grid>
                        </Grid>
                        
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '5px'}}>
                          {aulas && ( <EstiloDropDown value={_aulas} onChange={e => setAulaSelecionada(e.target.value)}
                                autoWidth
                                labelId="role-label"
                                id="role"
                                >
                                {
                                    aulas.aulas.map((item) => {
                                    return <MenuItem value={item._id}>{item.materia.nome + " - " + item.materia.curso  + " - " + item.professor.nome + " - " + item.cargaHoraria}</MenuItem>
                                    })
                                     
                                }

                            </EstiloDropDown>)}
                           
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={12} style={{marginTop: '5px'}}>
                          {alunos && ( <EstiloDropDown value={_alunos} onChange={e => setAlunoSelecionada(e.target.value)}
                                autoWidth
                                labelId="role-label"
                                id="role"
                                >
                                {
                                    alunos.alunos.map((item) => {
                                    return <MenuItem value={item._id}>{item.nome}</MenuItem>
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

export default CadastroNota;