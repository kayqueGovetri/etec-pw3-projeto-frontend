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

import AulaReq from '../Requisições/Aula'
var axios = require("axios");


function CadastroMateria (){

  //#region states e chama do axios
  const [cargaHoraria, setCargaHoraria] = useState('');
  const [_professor, setProfessorSelecionado] = useState('');
  const [_materia, setMateriaSelecionada] = useState('');
  const[professores, setProfessores] = useState('');
  const[materias, setMaterias] = useState('');


  console.log(typeof(professores));
  const aulaReq = new AulaReq();
  
//     function  ListaProfessores(){
//     return  professorReq.GetProfessores();
//   }

//   const professores = ListaProfessores();
// let professores = professorReq.GetProfessores();


  useEffect(() => {axios.get(`https://pw3-etec-projeto-backend.herokuapp.com/professores`, {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
  .then(res => {
    // const professor = res.data;
    setProfessores(res.data);
  })},[])

  useEffect(() => {axios.get(`https://pw3-etec-projeto-backend.herokuapp.com/materias`, {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
  .then(res => {
    // const professor = res.data;
    setMaterias(res.data);
  })},[])
  console.log(professores);

  function handleInsert(event){
      event.preventDefault();

      setCargaHoraria('');
      setProfessorSelecionado('');
      setMateriaSelecionada('');

      aulaReq.Cadastrar({cargaHoraria, _professor, _materia})
      
      alert('Parabéns ' + _professor + ', seu login foi realizado com sucesso!');

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
                <form id="form" className={classes.form} label="Cadastrar Aula" onSubmit={handleInsert}>
                    <Typography variant="h5" className={classes.titulo}>Cadastrar Aula</Typography>
                        <Divider variant="middle" />
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={1}>
                            <PersonIcon />
                          </Grid>
                          <Grid item md={11} style={{marginTop: '9%'}}>
                            <EstiloTextField id="cargaHoraria" label="Carga Horária" required value={cargaHoraria} onChange={e => setCargaHoraria(e.target.value)}/>
                          </Grid>
                        </Grid>
                        
                       
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={1}>
                            <DescriptionIcon />
                          </Grid>
                          <Grid item md={11} style={{marginTop: '5px'}}>
                          {professores && ( <EstiloDropDown value={_professor} onChange={e => setProfessorSelecionado(e.target.value)}
                                autoWidth
                                labelId="role-label"
                                id="role"
                                >
                                {
                                    professores.professores.map((item) => {
                                    return <MenuItem value={item._id}>{item.nome}</MenuItem>
                                    })
                                     
                                }

                            </EstiloDropDown>)}
                           
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item md={1}>
                            <DescriptionIcon />
                          </Grid>
                          <Grid item md={11} style={{marginTop: '5px'}}>
                          {materias && ( <EstiloDropDown label="Matéria" placeholder="Matreria" value={_materia} onChange={e => setMateriaSelecionada(e.target.value)}
                                
                                >
                                {
                                    materias.materias.map((item) => {
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

export default CadastroMateria;