import React from 'react';
import PropTypes from 'prop-types'
import Moment from 'moment'
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper,
    Button,
    Typography,
    Divider,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const Tabela = ({ linhas, celulas, informacaoTabela, width }) => {
    const useStyles = makeStyles({
        root: {
            marginLeft: '-15%',
            marginTop: '7%',
          '&':{
            width,
            minWidth: 900,
            borderRadius: 20,
          },
        },
        head: {
            fontWeight: 'bold',
        },
    })
    const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
        <div className={classes.paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {celulas.map((celula, index) => {
                if(index === 0) return <TableCell className={classes.head}>{celula}</TableCell>
                return <TableCell align="center" className={classes.head}>{celula}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
        
            {informacaoTabela === 'Aluno' && linhas.map((linha) => (
                <TableRow key={linha._id}>
                <TableCell component="th" scope="row">
                    {linha.nome}
                </TableCell>
                    <TableCell align="left">{linha.rm}</TableCell>
                    <TableCell align="left">{linha.telefone}</TableCell>
                    <TableCell align="left">{Moment(linha.dataNascimento).format('DD/MM/YYYY')}</TableCell>
                    <TableCell align="left">{Moment(linha.dataMatricula).format('DD/MM/YYYY')}</TableCell>
                    <TableCell align="left">{linha.cep}</TableCell>
                    <TableCell align="left">{linha.cpfResponsavel}</TableCell>
                    <TableCell align="left">{linha.email}</TableCell>
                    {/* <TableCell align="left">{linha.turma.curso}</TableCell>
                    <TableCell align="left">{linha.turma.semestre}</TableCell> */}
                </TableRow>
            ))}
            
            {informacaoTabela === "Turma" && linhas.map((linha) => (
                <TableRow key={linha._id}>
                <TableCell component="th" scope="row">
                    {linha.curso}
                </TableCell>
                <TableCell align="right">{linha.semestre}</TableCell>
                </TableRow>
            ))}

            {informacaoTabela === "Aula" && linhas.map((linha) => (
                <TableRow key={linha._id}>
                    <TableCell component="th" scope="row">
                        {linha.cargaHoraria}
                    </TableCell>
                    <TableCell align="right">{linha.professor.nome}</TableCell>
                    <TableCell align="right">{linha.materia.nome}</TableCell>
                </TableRow>
            ))}

            {informacaoTabela === "Nota" && linhas.map((linha) => (
                <TableRow key={linha._id}>
                    <TableCell component="th" scope="row">
                        {linha.aluno.nome}
                    </TableCell>
                    {console.log(linha)}
                    <TableCell align="right">{linha.aluno.rm}</TableCell>
                    <TableCell align="right">{linha.aula.professor.nome}</TableCell>
                    <TableCell align="right">{linha.aula.materia.nome}</TableCell>
                    <TableCell align="right">{linha.aula.materia.semestre}</TableCell>
                    <TableCell align="right">{linha.nota}</TableCell>
                </TableRow>
            ))}

            {informacaoTabela === "Professor" && linhas.map((linha) => (
                <TableRow key={linha._id}>
                    <TableCell component="th" scope="row">
                        {linha.nome}
                    </TableCell>
                    <TableCell align="right">{Moment(linha.dataNascimento).format('DD/MM/YYYY')}</TableCell>
                    <TableCell align="right">{linha.email}</TableCell>
                    {/* <TableCell align="right">{linha.especialidade}</TableCell> */}
                </TableRow>
            ))}
        </TableBody>
    </Table>
    </div>
</TableContainer>
);
}

export default Tabela

Tabela.propTypes = {
    celulas: PropTypes.array.isRequired,
    linhas: PropTypes.array.isRequired,
    informacaoTabela: PropTypes.string.isRequired,
}