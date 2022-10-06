import * as React from 'react'
import { Typography, Grid, Link, makeStyles } from '@material-ui/core'
import {LinkedIn, Email } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(4),
        backgroundColor: theme.palette.grey['100']
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
    },
    contactDetail: {
        marginLeft: theme.spacing(1),
    }
}))


const Address = () => {

    return (
        <Grid item xs={12} sm={4}>
            <Typography>London (Head Office)</Typography>
            <Typography>Kemp House </Typography>
            <Typography>160 City Road</Typography>
            <Typography>London</Typography>
            <Typography>EC1V 2NX</Typography>
        </Grid>
    )
}


const ContactDetails = () => {
    const styles = useStyles()   

    return (
        <Grid item xs={12} sm={4}>
            <div className={styles.row}>
                <Email />
                <Link href="mailto:info@coderlab.co.uk" 
                      className={styles.contactDetail}>
                    info@coderlab.co.uk
                </Link>
            </div>
            <div className={styles.row}>
                <LinkedIn />
                <Link href="https://linkedin.com/coderlab-ltd" 
                      className={styles.contactDetail}>
                    linkedin
                </Link>
            </div>
        </Grid>
    )
}

export const Footer = () => {
    const styles = useStyles()   

    return (
        <Grid container justifyContent="space-evenly" spacing={3} className={styles.container}>
            <Address />
            <ContactDetails />
        </Grid>
    )
}

