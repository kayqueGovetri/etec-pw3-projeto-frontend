import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import {  Link } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
    Grid
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import WorkIcon from '@material-ui/icons/Work';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import ClassIcon from '@material-ui/icons/Class';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CreateIcon from '@material-ui/icons/Create';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Logo from '../logo.png'

function SideMenu (){
    document.body.style.backgroundColor = '#e5e5ff';

    const useRowStyles = makeStyles({
        root: {
          '& > *': {
            border: 'unset',
            width: "35%",
            backgroundColor: 'whitesmoke',
          },
        },
        inside: {
            backgroundColor: '#DCDCDC',
        },
        header: {
            backgroundColor: 'whitesmoke',
            paddingLeft: '100%',
            paddingRight: '100%',
            paddingBottom: '10%',
            margin: '0',
            width: '100%',
            marginTop: '-2%',
        },
        link:{
            textDecoration: 'none',
            color: '#054F77',
            active: 'secondary',
            marginBottom: '5%',
        },
        logo:{
          position: 'absolute',
          width: '6%',
          padding: '1%',
          marginLeft: '-33%',
        }
      });

    const [aluno, setAluno] = React.useState(false);
    const [prof, setProf] = React.useState(false);
    const [aula, setAula] = React.useState(false);
    const [mat, setMat] = React.useState(false);
    const [turma, setTurma] = React.useState(false);
    const [nota, setNota] = React.useState(false);
    
    const classes = useRowStyles();
    return(
        <>
        <header className={classes.header}>
          <img src={Logo} alt="Logo" className={classes.logo}/>
          <Typography variant="h5" style={{textAlign: "center", paddingTop: "10%"}}>SISTEMA ESCOLA</Typography>
      </header>
        <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setAluno(!aluno)}>
            {aluno ? <PersonOutlineIcon /> : <PersonIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Aluno
        </TableCell>
      </TableRow>
      <TableRow className={classes.inside}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={aluno} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small">
                <TableBody>
                    <Link to = "/aluno/cadastro" className={classes.link}>Cadastrar</Link>
                </TableBody>
                <TableBody>
                    Informações do Aluno
                </TableBody>
                <TableBody>
                    <Link to = "/aluno/listagem" className={classes.link}>Listagem</Link>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setProf(!prof)}>
            {prof ? <WorkOutlineIcon /> : <WorkIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Professor
        </TableCell>
      </TableRow>
      <TableRow className={classes.inside}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={prof} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small">
                <TableBody>
                  <Link to = "/professor/cadastro" className={classes.link}>Cadastrar</Link>
                </TableBody>
                <TableBody>
                    Informações do Professor
                </TableBody>
                <TableBody>
                  <Link to = "/professor/listagem" className={classes.link}>Tabela</Link>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setAula(!aula)}>
            {aula ? <ClassOutlinedIcon /> : <ClassIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Aula
        </TableCell>
      </TableRow>
      <TableRow className={classes.inside}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={aula} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small">
                <TableBody>
                  <Link to = "/aula/cadastro" className={classes.link}>Cadastrar</Link>
                </TableBody>
                <TableBody>
                    Informações da Aula
                </TableBody>
                <TableBody>
                  <Link to = "/aula/listagem" className={classes.link}>Tabela</Link>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setMat(!mat)}>
            {mat ? <MenuBookTwoToneIcon /> : <MenuBookIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Matéria
        </TableCell>
      </TableRow>
      <TableRow className={classes.inside}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={mat} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small">
                <TableBody>
                  <Link to = "/materia/cadastro" className={classes.link}>Cadastrar</Link>
                </TableBody>
                <TableBody>
                    Informações da Matéria
                </TableBody>
                <TableBody>
                  <Link to = "/professor/listagem" className={classes.link}>Tabela</Link>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setTurma(!turma)}>
            {turma ? <PeopleOutlineIcon /> : <PeopleIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Turma
        </TableCell>
      </TableRow>
      <TableRow className={classes.inside}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={turma} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small">
                <TableBody>
                  <Link to = "/turma/cadastro" className={classes.link}>Cadastrar</Link>
                </TableBody>
                <TableBody>
                    Informações da Turma
                </TableBody>
                <TableBody>
                  <Link to = "/turma/listagem" className={classes.link}>Tabela</Link>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setNota(!nota)}>
            {nota ? <CreateOutlinedIcon /> : <CreateIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Notas
        </TableCell>
      </TableRow>
      <TableRow className={classes.inside}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={nota} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small">
                <TableBody>
                  <Link to = "/nota/cadastro" className={classes.link}>Cadastrar</Link>
                </TableBody>
                <TableBody>
                    Detalhes Notas
                </TableBody>
                <TableBody>
                  <Link to = "/nota/listagem" className={classes.link}>Tabela</Link>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
    );
}


export default SideMenu;