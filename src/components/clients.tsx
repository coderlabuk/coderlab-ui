import React, { FunctionComponent } from 'react'; 
import { Typography, Grid, makeStyles } from '@material-ui/core';
import sainsburys from '../assets/logo/sainsburys.png';
import citysprint from '../assets/logo/citysprint.png';
import peerpay from '../assets/logo/peerpay.png';
import snap from '../assets/logo/snap-hr.jpeg';


interface ClientsProps {
}


interface LogoProps {
    url: string
}


const logoStyles = makeStyles(theme => ({
    gridContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    logo: (props: LogoProps) => ({
        backgroundColor: "transparent",
        backgroundImage: `url(${props.url})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        border: "none",
        height: "70px",
        width: "200px",
    })
}))


const clientsStyles = makeStyles(theme => ({
    title: {
        marginBottom: theme.spacing(5),
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        margin: theme.spacing(3),
    },
}))


export const Logo: FunctionComponent<LogoProps> = (props) => {
    const styles = logoStyles(props)   

    return (
        <Grid item className={styles.gridContainer} xs={12} sm={6} md={3}>
            <div className={styles.logo} />
        </Grid>       
    )
}


export const Clients: FunctionComponent<ClientsProps> = (props) => {
    const styles = clientsStyles()   

    return (
        <div className={styles.container}>
            <Typography variant='h4' component='h4' className={styles.title}>
                Our clients
            </Typography>
            <Grid container spacing={3}>
                <Logo url={sainsburys} />
                <Logo url={citysprint} />
                <Logo url={peerpay} />
                <Logo url={snap} />
            </Grid>
        </div>
    )
}

