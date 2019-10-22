import React, { FunctionComponent } from 'react'; 
import { Typography, Grid, makeStyles } from '@material-ui/core';
// import {marginLg } from '../styles'


interface ClientsProps {
}

interface LogoProps {
    url: string
}


const logoStyles = makeStyles(theme => ({
    logo: (props: LogoProps) => ({
        backgroundColor: "transparent",
        backgroundImage: `url(${props.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "200px",
        width: "100%"
    })
}))

const clientsStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        margin: theme.spacing(2),
    },
}))


export const Logo: FunctionComponent<LogoProps> = (props) => {
    const styles = logoStyles(props)   

    return (
        <img className={styles.logo} />
    )
}

export const Clients: FunctionComponent<ClientsProps> = (props) => {
    const styles = clientsStyles()   

    const logos = [
        require('../assets/logo/sainsburys.png'),
    ]


    return (
        <div className={styles.container}>
            <Typography variant='h3' component='h3'>Our clients</Typography>
            <Grid>
            {logos.map(url => (
                <Logo url={url} />
            ))}
        </Grid>
        </div>
    )
}

