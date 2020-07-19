import React, {useState} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { Paper, withStyles, Grid, TextField, Button, Typography, InputLabel, Select, MenuItem } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import { sizing } from '@material-ui/system';
import { Face, Fingerprint } from '@material-ui/icons'
import usuarioApi from '../Requisições/Usuario.js'

var axios = require("axios");

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 5.5,
    },
    padding: {
        padding: theme.spacing.unit
    },
    top: {
        top: 15
    },
    
});


class LoginTab extends React.Component {

    constructor(props){
        super(props)
            this.state = {
                email: '',
                senha: ''
            }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleSenhaChange = (event) => {
        this.setState({
            senha: event.target.value
            
        })
        console.log(this.state.senha)
    }
    handleSubmit = (event) => {

        
        axios.post("http://localhost:3001/login", {email: this.state.email, senha:this.state.senha}).then(function(data){
            console.log(data.data);
        }).catch(function(error){
            console.log(error);
        });;
    }

    render() {
        const { classes } = this.props;
        document.body.style = 'background: #26a69a;';
       
        return (
            <Grid container justify="center" style={{ marginTop: '150px' }}> 
                <Grid item xls={0} sm={4} xlg={5}/>

                <Grid item xls={12} sm={4} xlg={2}>
                    <Paper className={classes.padding}>

                      <form onSubmit = {this.handleSubmit}>
                            <div className={classes.margin}>

                                <Grid container spacing={8} alignItems="flex-end">
                                
                                    <Grid item md={true} sm={true} xs={true}>
                                        <Typography
                                            align="center"
                                            color="textPrimary"
                                            variant="h4"
                                        >
                                            Bem vindo ao NSA
                                        </Typography>
                                    </Grid>
                                </Grid>
                                
                                <Grid container spacing={8}  alignItems="flex-end">
                                
                                    <Grid item md={true} sm={true} xs={true}>
                                            <InputLabel  justify="flex-start" id="txt-role">Entrar como:</InputLabel>
                                                <Select
                                                    autoWidth
                                                    labelId="role-label"
                                                    id="role"
                                                    >
                                                    <MenuItem value={10}>Aluno</MenuItem>
                                                    <MenuItem value={20}>Professor</MenuItem>
                                                    <MenuItem value={30}>Secretária</MenuItem>
                                                </Select> 
                                        </Grid> 
                                    </Grid>
                                
                                
                                <Grid container spacing={5} alignItems="flex-end">
                                    <Grid item>
                                        <Face />
                                    </Grid>
                                    <Grid item md={true} sm={true} xs={true}>
                                        <TextField id="email" label="E-mail" type="email" fullWidth autoFocus required  value={this.state.email} onChange={this.handleEmailChange}/>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={5} alignItems="flex-end">
                                    <Grid item>
                                        <Fingerprint />
                                    </Grid>
                                    <Grid item md={true} sm={true} xs={true}>
                                        <TextField id="senha" label="Senha" type="password" fullWidth required  value={this.state.senha} onChange={this.handleSenhaChange}/>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={10} alignItems="flex-end"><Grid item></Grid></Grid>
                                <Grid container spacing={5} alignItems="flex-end"><Grid item></Grid></Grid>

                                <Grid container justify="flex-end" style={{ marginTop: '10px' }}>
                                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ textTransform: "none" } }>Login</Button>
                                </Grid>

                                <Grid container spacing={10} alignItems="flex-end"><Grid item></Grid></Grid>

                            </div>
                        </form>
                    </Paper>

                </Grid>
                
                <Grid item xls={0} sm={4} xlg={5}/>
            </Grid>
        );
    }
}

export default withStyles(styles)(LoginTab);
