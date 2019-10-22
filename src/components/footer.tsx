import * as React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import {marginLg, marginXs} from '../styles'
import {LinkedIn, Email} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'space-evenly',
        margin: marginLg,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
    },
    contactDetail: {
        marginLeft: marginXs,
    }
}))


const Address = () => {

    return (
        <div>
            <Typography>London (Head Office)</Typography>
            <Typography>Kemp House </Typography>
            <Typography>160 City Road</Typography>
            <Typography>London</Typography>
            <Typography>EC1V 2NX</Typography>
        </div>
    )
}


const ContactDetails = () => {
    const styles = useStyles()   

    return (
        <div>
            <div className={styles.row}>
                <Email />
                <Typography className={styles.contactDetail}>
                    info@coderlab.co.uk
                </Typography>
            </div>
            <div className={styles.row}>
                <LinkedIn />
                <Typography className={styles.contactDetail}>
                    linkedin.com/coderlab-ltd
                </Typography>
            </div>
        </div>
    )
}

export const Footer = () => {
    const styles = useStyles()   

    return (
        <div className={styles.container}>
            <Address />
            <ContactDetails />
        </div>
    )
}

