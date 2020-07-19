import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import DescriptionIcon from '@material-ui/icons/Description';
import TodayIcon from '@material-ui/icons/Today';
import EmailIcon from '@material-ui/icons/Email';
import Divider from '@material-ui/core/Divider';
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
                        <TextField className={classes.text} fullWidth variant="outlined" size="small" placeholder="Nome" 
                        InputProps={{startAdornment: (<InputAdornment position="start"> <PersonIcon /></InputAdornment>),}} required/><br/>
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
                        <TextField className={classes.text} id="cpf" fullWidth variant="outlined" placeholder="CPF Responsavel" size="small"
                        InputProps={{startAdornment: (<InputAdornment position="start"> <DescriptionIcon /></InputAdornment>),}} required/><br/>
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