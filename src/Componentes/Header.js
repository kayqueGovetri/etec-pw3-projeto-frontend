/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Logo from '../logo.png'
import { makeStyles } from '@material-ui/core/styles';

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        border: 'unset',
        width: "35%",
        backgroundColor: 'whitesmoke',
      },
    },
    header: {
        height: '15%',
        backgroundColor: 'whitesmoke',
        paddingLeft: '100%',
        paddingRight: '100%',
        margin: '0',
        width: '100%',
    },
    logo:{
      position: 'absolute',
      width: '6%',
      padding: '1%',
      marginLeft: '-33%',
    }
  });

const classes = useRowStyles();

const Header = () => {
    return (
        <header className={classes.header}>
          <img src={Logo} alt="Logo" className={classes.logo}/>
          <Typography variant="h5" style={{textAlign: "center", paddingTop: "10%"}}>SISTEMA ESCOLA</Typography>
        </header>
    )
}

export default Header