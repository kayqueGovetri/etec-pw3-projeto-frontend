/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const Header = () => {
    return (
    <header style={{
        position: 'fixed',
        width: '100%',
        height: '80px',
        zIndex: 99,
        top: '0',
        marginBottom: '20px',
        display: 'grid',
        alignItems: 'center',
    }}>
        <Grid container spacing={1}>
            <Grid item lg={2} md={2} sm={2} xs={3}>
            <img style={{
                width: '20%',
                height: '80px',
                display: 'flex',  
            }} src="https://banner2.cleanpng.com/20180604/whb/kisspng-etec-of-embu-logo-pay-off-marketing-osasco-tax-5b157e7d3a35c6.7545525815281352932384.jpg"/>
            </Grid>
            <Grid item lg={7} md={7} sm={7} xs={6}>
                <Typography vasriant="h2">SISTEMA DO NSA</Typography>
            </Grid>

        </Grid>
        
    </header>
    )
}

export default Header