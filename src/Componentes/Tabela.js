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
    Paper
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'


const Tabela = ({ linhas, celulas, informacaoTabela, width }) => {
    const useStyles = makeStyles({
        root: {
          '&':{
            width,
          }
        }
    })
    const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {celulas.map((celula, index) => {
                if(index === 0) return <TableCell>{celula}</TableCell>
                return <TableCell align="right">{celula}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
            {informacaoTabela === 'Aluno' && linhas.map((linha) => (
                <TableRow key={linha._id} >
                    <TableCell component="th" scope="row">
                        {linha.nome}
                    </TableCell>
                    <TableCell align="right">{linha.rm}</TableCell>
                    <TableCell align="right">{linha.telefone}</TableCell>
                    <TableCell align="right">{Moment(linha.dataNascimento).format('DD/MM/YYYY')}</TableCell>
                    <TableCell align="right">{Moment(linha.dataMatricula).format('DD/MM/YYYY')}</TableCell>
                    <TableCell align="right">{linha.cep}</TableCell>
                    <TableCell align="right">{linha.cpfResponsavel}</TableCell>
                    <TableCell align="right">{linha.email}</TableCell>
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
                    <TableCell align="right">{linha.aluno.rm}</TableCell>
                    <TableCell align="right">{linha.materia.nome}</TableCell>
                    <TableCell align="right">{linha.professor.nome}</TableCell>
                    <TableCell align="right">{linha.materia.nome}</TableCell>
                    <TableCell align="right">{linha.materia.semestre}</TableCell>
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
</TableContainer>
);
}

export default Tabela

Tabela.propTypes = {
    celulas: PropTypes.array.isRequired,
    linhas: PropTypes.array.isRequired,
    informacaoTabela: PropTypes.string.isRequired,
}